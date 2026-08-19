"use client";

import { useEffect } from "react";

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

export function SmoothHashScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let canceled = false;

    const stop = () => {
      canceled = true;
      cancelAnimationFrame(frame);
    };

    const scrollToY = (targetY: number, duration: number) => {
      stop();
      canceled = false;
      const startY = window.scrollY;
      const delta = targetY - startY;
      if (Math.abs(delta) < 2) return;

      const start = performance.now();
      const step = (now: number) => {
        if (canceled) return;
        const t = Math.min(1, (now - start) / duration);
        window.scrollTo(0, startY + delta * easeInOutCubic(t));
        if (t < 1) frame = requestAnimationFrame(step);
      };

      frame = requestAnimationFrame(step);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='#']");
      if (!(link instanceof HTMLAnchorElement)) return;

      const id = decodeURIComponent(link.hash.slice(1));
      if (!id) return;
      const node = document.getElementById(id);
      if (!node) return;

      event.preventDefault();
      event.stopPropagation();

      const margin = Number.parseFloat(getComputedStyle(node).scrollMarginTop) || 0;
      const top = node.getBoundingClientRect().top + window.scrollY - margin;

      if (reduce) {
        window.scrollTo(0, top);
      } else {
        const distance = Math.abs(top - window.scrollY);
        const duration = Math.min(1300, Math.max(750, distance * 0.38));
        scrollToY(top, duration);
      }

      history.replaceState(null, "", `#${id}`);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchmove", stop, { passive: true });
    window.addEventListener("keydown", stop);

    return () => {
      stop();
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchmove", stop);
      window.removeEventListener("keydown", stop);
    };
  }, []);

  return null;
}
