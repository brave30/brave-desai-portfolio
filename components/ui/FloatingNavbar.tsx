"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      // Show navbar when scrolled past the Hero section (around 15% of page)
      if (current > 0.15) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -50,
          scale: 0.95,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : -50,
          scale: visible ? 1 : 0.95,
        }}
        exit={{
          opacity: 0,
          y: -50,
          scale: 0.95,
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          scale: 1.02,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        }}
        className={cn(
          "flex max-w-fit fixed top-8 inset-x-0 mx-auto border rounded-full z-[5000] px-8 py-4 items-center justify-center space-x-4 bg-black-100",
          "border-emerald-500/30 hover:border-emerald-400/60 transition-all duration-500",
          "backdrop-blur-xl bg-black-100/80 navbar-glow",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <motion.div
            key={`link=${idx}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 10 }}
            transition={{
              duration: 0.5,
              delay: idx * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
              scale: 1.08,
              transition: {
                duration: 0.25,
                ease: "easeOut"
              }
            }}
            whileTap={{
              scale: 0.95,
              transition: {
                duration: 0.15,
                ease: "easeOut"
              }
            }}
          >
            <Link
              href={navItem.link}
              className={cn(
                "relative items-center flex space-x-2 text-neutral-300 hover:text-emerald-300 transition-all duration-300",
                "group px-4 py-2 rounded-lg hover:bg-emerald-500/10 nav-item"
              )}
            >
              <motion.span 
                className="block sm:hidden text-base"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {navItem.icon}
              </motion.span>
              <motion.span 
                className="text-sm !cursor-pointer font-medium"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {navItem.name}
              </motion.span>
              
              {/* Hover effect underline */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
