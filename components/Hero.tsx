"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className = "relative pt-36 pb-[28vh] md:pb-[34vh]">
        <div>
            <Spotlight className = "-top-40 -left-10 md:-left-32 md:-top-20 h-screen " fill="white" />
            <Spotlight className = "top-10 left-full  h-[80vh] w-[50vw]" fill="green" />
            <Spotlight className = "top-28 left-80 h-[80vh] w-[50vw] " fill="cyan" />
        </div>
        
        <div className="pointer-events-none -z-10 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0" aria-hidden="true">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
            <div className = 'max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                
                <motion.div
                  className="-mt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <TextGenerateEffect
                    className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
                    words="Data speaks. I help it || make sense."
                  />
                </motion.div>
                
                <motion.p 
                  className="text-center md:tracking-wider mt-4 md:mt-6 mb-4 text-base sm:text-lg md:text-xl lg:text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    Hey, I am <span className="text-emerald-400 font-semibold">Brave Desai</span>.
                </motion.p>
                
                <motion.div 
                  className="text-center max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-2">
                    AI/ML Engineer building <span className="text-emerald-400 font-semibold">scalable</span> intelligent systems that transform data into actionable insights.
                  </p>
                  <motion.div 
                    className="flex items-center justify-center gap-2 mt-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                >
                  <motion.a 
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                      <MagicButton 
                          title="View Projects"
                          position='right'
                      />
                  </motion.a>
                  <motion.a 
                    href="/Brave_Desai_Resume.pdf" 
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                      <MagicButton 
                          title="Download Resume"
                          position='right'
                      />
                  </motion.a>
                </motion.div>

            </div>

        </div>
    </div>
  )
}

export default Hero