"use client";
import React from 'react';
import Image from 'next/image'; // Import next/image for optimized images
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import { RxResume } from 'react-icons/rx';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='w-full py-10' id='contact'>
        <div className='flex flex-col items-center'>
            <motion.h1 
              className='heading lg:max-w-[45w]'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
                Ready to go from <span className='text-emerald-100'>Data</span> to <span className='text-purple'>Intelligence</span>?
            </motion.h1>
            
            <motion.p 
              className='text-white-200 md:mt-10 my-5 text-center max-w-2xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
                Reach out to me today and let&apos;s discuss how I can help you achieve your goal. 
                I&apos;m always excited to collaborate on innovative AI/ML projects.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MagicButton 
                title="Collaborate Now"
                icon={<FaLocationArrow />}
                position='right'
                handleClick={() => {
                  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=brave.d302001@gmail.com', '_blank');
                }}
              />
            </motion.div>

            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <MagicButton 
              title="Download Resume"
              icon={<RxResume />}
              position='right'
                     handleClick={() => {
                       if (typeof window !== 'undefined') {
                         const link = document.createElement('a');
                         link.href = '/Brave_Desai_Resume.pdf';
                         link.download = 'Brave_Desai_Resume.pdf';
                         document.body.appendChild(link);
                         link.click();
                         document.body.removeChild(link);
                       }
                     }}
            />
            </motion.div>

        </div>
        {/* Social icons removed as requested */}
    </footer>
  );
};

export default Footer;
