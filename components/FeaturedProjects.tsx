"use client";
import { useMemo, useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { featuredProjects, FeaturedProject, FeaturedProjectTag } from "@/data";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const TAGS: ("All" | FeaturedProjectTag)[] = ["All", "ML", "Data Engineering", "Analytics"];

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
        active 
          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/25" 
          : "bg-white/5 text-white-100 border-white/20 hover:border-emerald-400/50 hover:text-emerald-300 hover:bg-emerald-500/10"
      }`}
      aria-pressed={active}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
}

function Card({ p }: { p: FeaturedProject }) {
  return (
    <motion.article
      className="group relative rounded-2xl border border-emerald-500/20 bg-black/40 backdrop-blur-xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:border-emerald-400/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 blur-sm" />
      </div>
      
      <div className="relative">
        {p.img && (
          <div className="relative w-full h-40 mb-6 overflow-hidden rounded-xl border border-emerald-500/15 bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <Image 
              src={p.img} 
              alt={p.title} 
              fill 
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" 
              className="object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Overlay Icons */}
            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <a 
                href={p.github || "#"} 
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                aria-label={`View ${p.title} on GitHub`}
              >
                <FiGithub className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                aria-label={`View ${p.title} case study`}
              >
                <FiExternalLink className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        )}
        
        <header className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight">
            {p.title}
          </h3>
          {p.outcome && (
            <p className="text-sm text-emerald-300 font-medium mt-1">
              {p.outcome}
            </p>
          )}
        </header>
        
        <div className="space-y-3">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-medium text-white">Problem:</span> {p.problem}
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-medium text-white">Solution:</span> {p.solution}
          </p>
        </div>
        
        <ul className="flex flex-wrap gap-2 mt-4">
          {p.stack.map((s, index) => (
            <motion.li 
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-400/40 transition-all duration-200">
                {s}
              </span>
            </motion.li>
          ))}
        </ul>
        
        <div className="flex gap-3 mt-6">
          <motion.a 
            href={p.github || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>
          <motion.a 
            href="#" 
            className="flex items-center gap-2 px-4 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:border-emerald-400/50 hover:text-emerald-300 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Case Study</span>
            <FiArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  const [tag, setTag] = useState<("All" | FeaturedProjectTag)>("All");
  const items = useMemo(() => {
    const filtered = tag === "All" ? featuredProjects : featuredProjects.filter((p) => p.tags.includes(tag));
    return filtered; // show all, carousel handles viewport
  }, [tag]);

  // responsive page size
  const [pageSize, setPageSize] = useState(2);
  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqSm = window.matchMedia("(min-width: 640px)");
    // 2 cards on desktop, 1 card otherwise
    const apply = () => setPageSize(mqLg.matches ? 2 : 1);
    apply();
    const onLg = () => apply();
    const onSm = () => apply();
    mqLg.addEventListener("change", onLg);
    mqSm.addEventListener("change", onSm);
    return () => {
      mqLg.removeEventListener("change", onLg);
      mqSm.removeEventListener("change", onSm);
    };
  }, []);

  // pages and translation
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const [page, setPage] = useState(0);
  useEffect(() => {
    // ensure current page within bounds if pageSize changes
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerW, setContainerW] = useState(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setContainerW(el.clientWidth));
    ro.observe(el);
    setContainerW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const handlePrev = useCallback(() => setPage((p) => Math.max(0, p - 1)), []);
  const handleNext = useCallback(() => setPage((p) => Math.min(totalPages - 1, p + 1)), [totalPages]);

  // touch swipe
  const startX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchMove = (e: React.TouchEvent) => { /* passive */ };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const threshold = 40;
    if (dx > threshold) handlePrev();
    if (dx < -threshold) handleNext();
    startX.current = null;
  };

  const translateX = -(page * containerW);
  const basisPct = 100 / pageSize;

  return (
    <section id="featured" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.1),transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Enhanced Header */}
        <motion.header 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-sm uppercase tracking-wider text-emerald-300 font-medium mb-2">Featured Work</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              In-depth case studies showcasing measurable outcomes, technical approaches, and innovative solutions.
            </p>
          </div>
          <nav aria-label="Project filters" className="flex gap-3 flex-wrap">
            {TAGS.map((t) => (
              <Chip key={t} label={t} active={tag === t} onClick={() => setTag(t)} />
            ))}
          </nav>
        </motion.header>

        {/* Enhanced Carousel */}
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-3xl"
          role="region"
          aria-label="Featured projects carousel"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Carousel Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 rounded-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)] rounded-3xl" />
          
          <div className="relative p-8 md:p-12">
            <motion.div
              className="flex gap-8"
              style={{ width: items.length ? undefined : 0 }}
              animate={{ x: translateX }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {items.map((p) => (
                <div key={p.slug} style={{ flex: `0 0 ${basisPct}%` }} className="min-w-0">
                  <Card p={p} />
                </div>
              ))}
            </motion.div>

            {/* Enhanced Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <motion.button
                aria-label="Previous projects"
                onClick={handlePrev}
                disabled={page === 0}
                className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowLeft className="w-5 h-5" />
              </motion.button>
              
              {/* Page Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPage(index)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      page === index 
                        ? 'bg-emerald-400 w-8' 
                        : 'bg-white/30 w-2 hover:bg-white/50'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                aria-label="Next projects"
                onClick={handleNext}
                disabled={page >= totalPages - 1}
                className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
