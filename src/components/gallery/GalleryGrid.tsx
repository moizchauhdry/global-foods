"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
} from "@/src/data/gallery";
import { cn } from "@/src/lib/cn";

export function GalleryGrid() {
  const [filter, setFilter] = useState<"All" | GalleryCategory>("All");
  const [activeId, setActiveId] = useState<string | null>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === filter),
    [filter],
  );

  const activeItem = galleryItems.find((item) => item.id === activeId) ?? null;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            className={cn(
              "h-10 rounded-sm border px-4 text-sm transition-colors",
              filter === category
                ? "border-forest bg-forest text-white"
                : "border-line bg-paper text-charcoal hover:border-forest/40",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.button
              layout
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="mb-4 block w-full break-inside-avoid overflow-hidden border border-line text-left"
              onClick={() => setActiveId(item.id)}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="bg-paper p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-sage">
                  {item.category}
                </p>
                <p className="mt-1 font-display text-xl text-forest-deep">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeItem ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-deep/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative w-full max-w-4xl overflow-hidden bg-paper"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-forest-deep text-white"
                aria-label="Close lightbox"
                onClick={() => setActiveId(null)}
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative aspect-[16/10]">
                <Image
                  src={activeItem.image.src}
                  alt={activeItem.image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-sage">
                  {activeItem.category}
                </p>
                <h3 className="mt-1 font-display text-2xl text-forest-deep">
                  {activeItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
