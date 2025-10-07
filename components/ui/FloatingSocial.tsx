"use client";
import Image from "next/image";
import { socialMedia } from "@/data";
import { motion } from "framer-motion";

export default function FloatingSocial() {
  const linkedin = socialMedia.find((s) => s.img.includes("link")) || {
    link: "https://linkedin.com/in/bd4",
    img: "/link.svg",
    id: 0,
  } as any;

  return (
    <motion.div
      className="fixed left-4 bottom-4 z-[6000]"
      initial={{ y: 0, rotate: 0, opacity: 0.95 }}
      animate={{ y: [0, -12, 0], rotate: [-2, 2, -2], opacity: 1 }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.a
        href={linkedin.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12, y: -4, rotate: 0 }}
        whileTap={{ scale: 0.98 }}
        className="group relative inline-flex items-center justify-center rounded-full border-2 border-emerald-500/50 bg-black-100/70 backdrop-blur-md p-3.5 shadow-lg hover:border-emerald-400/70 hover:shadow-[0_0_18px_rgba(34,197,94,0.25)] transition"
        aria-label="Open LinkedIn profile"
      >
        {/* pulsing glow ring */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(52,211,153,0.5) 0%, rgba(52,211,153,0.0) 70%)",
          }}
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.5, 0.0, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <Image src={linkedin.img} width={20} height={20} alt="LinkedIn" />
        <span className="sr-only">LinkedIn</span>
      </motion.a>
    </motion.div>
  );
}
