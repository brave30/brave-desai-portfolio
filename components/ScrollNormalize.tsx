"use client";
import { useEffect } from "react";

export default function ScrollNormalize() {
  useEffect(() => {
    // Normalize initial scroll after paint to avoid first-wheel stalling
    const run = () => {
      if (typeof window === "undefined") return;
      const { hash } = window.location;
      if (!hash) {
        // Ensure we start at the top
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      } else {
        const id = hash.slice(1);
        if (typeof window !== 'undefined') {
          const target = document.getElementById(id);
          if (target && typeof target.scrollIntoView === "function") {
            // Wait one more frame so layout settles, then jump to anchor
            requestAnimationFrame(() => target.scrollIntoView({ behavior: "auto", block: "start" }));
          }
        }
      }
    };

    // Run after mount and next frame
    requestAnimationFrame(run);
  }, []);

  return null;
}
