"use client";
import { useEffect } from "react";

/**
 * Lightweight helper: if the very first scroll doesn't move the page
 * (rare edge-case on some Chrome versions), nudge it gently.
 * Respects prefers-reduced-motion.
 */
export default function FirstScrollNudge() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let handled = false;
    const onWheel = (e: WheelEvent) => {
      if (handled) return;
      handled = true;
      const start = window.scrollY;
      const delta = e.deltaY;
      
      // Check after one frame if scroll actually moved
      requestAnimationFrame(() => {
        const moved = Math.abs(window.scrollY - start);
        if (moved < 2 && Math.abs(delta) > 10) {
          // Gentle nudge in the scroll direction
          const amount = Math.sign(delta) * Math.min(window.innerHeight * 0.4, 400);
          window.scrollBy({ top: amount, behavior: "auto" });
        }
      });
      
      // One-time only
      window.removeEventListener("wheel", onWheel, { passive: true } as any);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel as any);
  }, []);

  return null;
}
