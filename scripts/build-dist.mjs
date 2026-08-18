import { spawnSync } from "node:child_process"
import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  statSync,
} from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const nextDir = join(root, ".next")
const distDir = join(root, "dist")
const distNext = join(distDir, ".next")

const SKIP_DIRS = new Set([
  "cache",
  "dev",
  "diagnostics",
  "types",
  "turbopack",
])

const COPY_DIRS = ["build", "server", "static"]

const COPY_FILES = [
  "BUILD_ID",
  "app-build-manifest.json",
  "app-path-routes-manifest.json",
  "build-manifest.json",
  "dynamic-css-manifests.json",
  "export-marker.json",
  "fallback-build-manifest.json",
  "images-manifest.json",
  "middleware-manifest.json",
  "next-font-manifest.js",
  "next-font-manifest.json",
  "next-minimal-server.js.nft.json",
  "next-server.js.nft.json",
  "package.json",
  "prerender-manifest.json",
  "react-loadable-manifest.json",
  "required-server-files.js",
  "required-server-files.json",
  "routes-manifest.json",
  "server-reference-manifest.js",
  "server-reference-manifest.json",
]

function fail(message) {
  console.error(`build-dist: ${message}`)
  process.exit(1)
}

function runBuild() {
  console.log("build-dist: running production next build")
  const result = spawnSync("npx next build", {
    cwd: root,
    env: { ...process.env, NODE_ENV: "production" },
    shell: true,
    stdio: "inherit",
  })

  if (result.status !== 0) {
    fail(`next build failed with exit code ${result.status ?? 1}`)
  }
}

function copyFilteredDir(src, dest) {
  if (!existsSync(src)) return

  mkdirSync(dest, { recursive: true })

  for (const entry of readdirSync(src, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue

    const from = join(src, entry.name)
    const to = join(dest, entry.name)

    if (entry.isDirectory()) {
      copyFilteredDir(from, to)
      continue
    }

    if (entry.name.endsWith(".map")) continue
    if (entry.name.startsWith("trace")) continue

    copyFileSync(from, to)
  }
}

function copyRootProductionFiles() {
  const copied = new Set()

  for (const name of COPY_FILES) {
    const from = join(nextDir, name)
    if (!existsSync(from) || statSync(from).isDirectory()) continue
    copyFileSync(from, join(distNext, name))
    copied.add(name)
  }

  for (const entry of readdirSync(nextDir, { withFileTypes: true })) {
    if (!entry.isFile()) continue
    if (copied.has(entry.name)) continue
    if (entry.name.endsWith(".map")) continue
    if (entry.name.startsWith("trace")) continue

    const isManifest =
      entry.name.endsWith(".json") ||
      entry.name.endsWith(".js") ||
      entry.name === "BUILD_ID"

    if (!isManifest) continue

    copyFileSync(join(nextDir, entry.name), join(distNext, entry.name))
  }
}

function assembleDist() {
  if (!existsSync(nextDir)) {
    fail("missing .next after production build")
  }

  rmSync(distDir, { recursive: true, force: true })
  mkdirSync(distNext, { recursive: true })

  copyRootProductionFiles()

  for (const name of COPY_DIRS) {
    copyFilteredDir(join(nextDir, name), join(distNext, name))
  }

  const publicDir = join(root, "public")
  if (existsSync(publicDir)) {
    cpSync(publicDir, join(distDir, "public"), { recursive: true })
  }

  const serverJs = join(root, "server.js")
  if (!existsSync(serverJs)) {
    fail("missing server.js")
  }
  copyFileSync(serverJs, join(distDir, "server.js"))
}

function assertCleanDist() {
  if (existsSync(join(distNext, "dev"))) {
    fail("dist/.next/dev must not be included")
  }
  if (existsSync(join(distNext, "cache"))) {
    fail("dist/.next/cache must not be included")
  }
  if (!existsSync(join(distNext, "server"))) {
    fail("dist/.next/server is required")
  }
  if (!existsSync(join(distNext, "static"))) {
    fail("dist/.next/static is required")
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  const units = ["KB", "MB", "GB"]
  let value = bytes / 1024
  let unit = 0
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024
    unit += 1
  }
  return `${value.toFixed(1)} ${units[unit]}`
}

function measureDir(dir) {
  let total = 0
  let files = 0

  const walk = (current) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const path = join(current, entry.name)
      if (entry.isDirectory()) {
        walk(path)
        continue
      }
      files += 1
      total += statSync(path).size
    }
  }

  walk(dir)
  return { files, total }
}

runBuild()
assembleDist()
assertCleanDist()

const stats = measureDir(distDir)
console.log(
  `build-dist: assembled dist/ (${stats.files} files, ${formatBytes(stats.total)})`,
)
