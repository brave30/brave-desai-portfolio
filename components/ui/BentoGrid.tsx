'use client'
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { motion } from "framer-motion";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/utils/cn";


import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // refined spacing for better readability across the section
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-6 lg:gap-10 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "GenAI", "SQL"];
  const rightLists = ["Python", "Tensorflow", "OpenCV"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "brave.d302001@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <motion.div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-emerald-500/20 group/bento hover:border-emerald-400/40 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.08)] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 rounded-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_70%)] rounded-3xl" />
        
        <div className="w-full h-full absolute">
          {img && (
            <motion.img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-contain object-center transition-transform duration-500 group-hover/bento:scale-110")}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}

              className="object-contain object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 ${
              id === 5 ? 'pt-8 lg:pt-12' : id === 4 ? 'pt-4 lg:pt-6' : ''
            }`
          )}
        >
          {/* Enhanced description with animation */}
          <motion.div 
            className="font-sans font-extralight md:max-w-40 md:text-sm lg:text-base text-sm text-white/70 z-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.div>
          
          {/* Enhanced title with animation */}
          <motion.div
            className={`font-sans max-w-96 font-medium z-10 whitespace-pre-line
            ${id === 1 ? 'text-xl lg:text-4xl leading-tight tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]' : ''}
            ${id === 3 ? 'text-xl lg:text-3xl leading-snug tracking-wide bg-gradient-to-b from-emerald-200 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_1px_4px_rgba(16,185,129,0.25)]' : ''}
            ${id === 6 ? 'text-xl lg:text-3xl leading-tight text-emerald-300 drop-shadow-[0_1px_4px_rgba(16,185,129,0.18)]' : ''}
            ${id !== 1 && id !== 3 && id !== 6 ? 'text-lg lg:text-3xl leading-tight tracking-normal text-white' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.div>

          {/* Removed GlobeDemo to fix SSR issues */}

          {/* Enhanced tech stack list div */}
          {id === 3 && (
            <motion.div 
              className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-5">
                {leftLists.map((item, i) => (
                  <motion.span
                    key={i}
                    className="lg:py-3 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-90 lg:opacity-100 rounded-lg text-center bg-emerald-900/30 border border-emerald-500/20 text-emerald-200 hover:border-emerald-400/40 transition-all duration-300 hover:bg-emerald-800/40 hover:shadow-lg hover:shadow-emerald-500/20"
                    initial={{ opacity: 0, x: -20, rotate: -5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                ))}
                <motion.span 
                  className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-emerald-900/30 border border-emerald-500/20 text-emerald-200 hover:border-emerald-400/40 transition-all duration-300 hover:bg-emerald-800/40 hover:shadow-lg hover:shadow-emerald-500/20"
                  initial={{ opacity: 0, x: -20, rotate: -5 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  viewport={{ once: true }}
                >
                  ML
                </motion.span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <motion.span 
                  className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-emerald-900/30 border border-emerald-500/20"
                  initial={{ opacity: 0, x: 20, rotate: 5 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                ></motion.span>
                {rightLists.map((item, i) => (
                  <motion.span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-90 lg:opacity-100 rounded-lg text-center bg-emerald-900/30 border border-emerald-500/20 text-emerald-200 hover:border-emerald-400/40 transition-all duration-300 hover:bg-emerald-800/40 hover:shadow-lg hover:shadow-emerald-500/20"
                    initial={{ opacity: 0, x: 20, rotate: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
          {id === 6 && (
            <motion.div 
              className="mt-5 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Enhanced confetti animation */}
              <motion.div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: copied ? 1 : 0, opacity: copied ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <MagicButton
                  title={copied ? "Email Copied!" : "Copy Email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31] hover:!bg-[#1e2338] transition-all duration-300 whitespace-nowrap"
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};