"use client";
import { projects } from '@/data'
import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowLeft } from 'react-icons/fi'

type ProjectItem = {
  id: number;
  title: string;
  des: string;
  img: string;
  height?: string;
  width?: string;
  link?: string;
};

const RecentProjects = () => {
  // responsive page size: 2 on md+, 1 on mobile
  const [pageSize, setPageSize] = useState<number>(2);
  const [start, setStart] = useState<number>(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setPageSize(mq.matches ? 2 : 1);
    apply();
    try {
      mq.addEventListener('change', apply);
      return () => mq.removeEventListener('change', apply);
    } catch {
      // Safari fallback
      mq.addListener(apply);
      return () => mq.removeListener(apply);
    }
  }, []);

  const total = projects.length;
  const visibleItems: ProjectItem[] = useMemo(() => {
    const out: ProjectItem[] = [];
    for (let i = 0; i < Math.min(pageSize, total); i++) {
      const idx = (start + i) % total;
      out.push(projects[idx] as unknown as ProjectItem);
    }
    return out;
  }, [pageSize, start, total]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setStart((s) => (s + pageSize) % total);
  }, [pageSize, total]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setStart((s) => (s - pageSize + total) % total);
  }, [pageSize, total]);

  // helpers (label/metric omitted per request)

  const getStack = (title: string): string[] => {
    const map: Record<string, string[]> = {
      'HubermanGPT': ['Phi‑2', 'QLoRA', 'RAG', 'LlamaIndex'],
      'Transformer from Scratch': ['PyTorch', 'Attention', 'PosEnc'],
      'Siamese Face Recognition + Augmentation': ['CNN', 'Siamese', 'Augment'],
      'Flight Price Predictor': ['Pandas', 'XGBoost', 'Postgres']
    };
    return map[title] || [];
  };

  return (
    <section className='py-24 px-4 sm:px-6 lg:px-8' id='projects'>
      {/* Enhanced Header */}
      <div className='max-w-7xl mx-auto mb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
            Things I&apos;ve Been{' '}
            <span className='bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent'>
              Building
            </span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Innovative projects that showcase my passion for AI, machine learning, and cutting-edge technology solutions.
          </p>
        </motion.div>
      </div>

      {/* Enhanced Carousel Container */}
      <div className='max-w-7xl mx-auto'>
        <div
          className='relative overflow-hidden rounded-3xl'
          role="region"
          aria-label="Recent projects carousel"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
          }}
        >
          {/* Background Effects */}
          <div className='absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 rounded-3xl' />
          <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)] rounded-3xl' />
          
          <div className='relative p-8 md:p-12'>
            <AnimatePresence initial={false} custom={direction} mode='popLayout'>
              <motion.div
                key={`${start}-${pageSize}`}
                custom={direction}
                initial={{ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.95 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: direction > 0 ? -100 : 100, opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  scale: { duration: 0.3 }
                }}
                className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'
              >
                {visibleItems.map((item, index) => {
                  const { id, title, des, img, height, width, link } = item as ProjectItem;
                  return (
                    <motion.div
                      key={`proj-${id}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className='group'
                    >
                      {/* Enhanced Project Card */}
                      <div className='relative h-full'>
                        {/* Animated Border */}
                        <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 p-[2px]'>
                          <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                        </div>
                        
                        {/* Card Content */}
                        <div className='relative h-full bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-500 group-hover:border-emerald-400/30 group-hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] group-hover:-translate-y-2'>
                          
                          {/* Project Image */}
                          <div className='relative mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50'>
                            <div className='relative h-[200px] md:h-[250px] flex items-center justify-center p-4'>
                              <img 
                                src={img} 
                                alt={title} 
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105' 
                              />
                              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                              
                              {/* Overlay Icons */}
                              <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
                                <a 
                                  href={link || '#'} 
                                  className='p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors'
                                  aria-label={`View ${title} case study`}
                                >
                                  <FiExternalLink className='w-4 h-4 text-white' />
                                </a>
                                <a 
                                  href='#' 
                                  className='p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors'
                                  aria-label={`View ${title} on GitHub`}
                                >
                                  <FiGithub className='w-4 h-4 text-white' />
                                </a>
                              </div>
                            </div>
                          </div>

                          {/* Project Content */}
                          <div className='space-y-4'>
                            {/* Title */}
                            <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight'>
                              {title}
                            </h3>
                            
                            {/* Description */}
                            <p className='text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg line-clamp-3'>
                              {des}
                            </p>
                            
                            {/* Tech Stack */}
                            <div className='flex flex-wrap gap-2'>
                              {getStack(title).map((tech, techIndex) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                                  className='px-3 py-1.5 text-xs font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 hover:border-emerald-400/40 transition-all duration-200'
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                            
                            {/* Action Buttons */}
                            <div className='flex gap-3 pt-4'>
                              <motion.a
                                href={link || '#'}
                                className='flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <span>Case Study</span>
                                <FiArrowRight className='w-4 h-4' />
                              </motion.a>
                              <motion.a
                                href='#'
                                className='flex items-center gap-2 px-4 py-2.5 border border-white/20 text-white font-semibold rounded-lg hover:border-emerald-400/50 hover:text-emerald-300 transition-all duration-200'
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <FiGithub className='w-4 h-4' />
                                <span>GitHub</span>
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Enhanced Navigation Controls */}
            <div className='flex justify-center items-center gap-4 mt-8'>
              <motion.button
                aria-label='Previous projects'
                onClick={handlePrev}
                className='flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={start === 0}
              >
                <FiArrowLeft className='w-5 h-5' />
              </motion.button>
              
              {/* Page Indicators */}
              <div className='flex gap-2'>
                {Array.from({ length: Math.ceil(projects.length / pageSize) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setStart(index * pageSize)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      Math.floor(start / pageSize) === index 
                        ? 'bg-emerald-400 w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              
              <motion.button
                aria-label='Next projects'
                onClick={handleNext}
                className='flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={start + pageSize >= projects.length}
              >
                <FiArrowRight className='w-5 h-5' />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentProjects
