import nodemailer from "nodemailer";

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function readString(value: unknown, max = 500) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function getTransport() {
  const host = requireEnv("SMTP_HOST");
  const port = Number.parseInt(process.env.SMTP_PORT || "465", 10);
  const user = requireEnv("SMTP_USER");
  const pass = requireEnv("SMTP_PASS");

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

export async function sendNotificationEmail({
  subject,
  fields,
  message,
  replyTo,
}: {
  subject: string;
  fields: Array<[label: string, value: string]>;
  message: string;
  replyTo: string;
}) {
  const to = requireEnv("CONTACT_TO_EMAIL");
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || requireEnv("SMTP_USER");
  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#555;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
  const text = [
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  await getTransport().sendMail({
    from,
    to,
    replyTo,
    subject,
    text,
    html: `
      <div style="font-family:Arial,sans-serif;font-size:14px;line-height:1.5;color:#222;">
        <table style="border-collapse:collapse;">${rows}</table>
        <p style="margin:16px 0 6px;color:#555;">Message</p>
        <p style="white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
      </div>
    `,
  });
}
