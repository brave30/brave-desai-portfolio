"use client";
import { workExperience, education } from '@/data'
import React from 'react'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiArrowRight, FiBriefcase, FiBookOpen, FiHome, FiAward, FiUsers, FiTrendingUp, FiCode, FiDatabase } from 'react-icons/fi'

const Experience = () => {
  const getRoleIcon = (title: string) => {
    if (title.toLowerCase().includes('data scientist')) return <FiTrendingUp className='w-5 h-5' />;
    if (title.toLowerCase().includes('engineer')) return <FiCode className='w-5 h-5' />;
    if (title.toLowerCase().includes('analyst')) return <FiDatabase className='w-5 h-5' />;
    return <FiUsers className='w-5 h-5' />;
  };

  // Create timeline items with proper typing
  const workItems = workExperience.map(item => ({ ...item, type: 'work' as const }));
  const educationItems = education.map(item => ({ ...item, type: 'education' as const }));
  
  // Combine and sort timeline items
  const timelineItems = [...workItems, ...educationItems].sort((a, b) => {
    const getYear = (period: string) => {
      if (period.includes('Present')) return new Date().getFullYear();
      const year = parseInt(period.split(' - ')[0]);
      return isNaN(year) ? 0 : year;
    };
    
    let aPeriod: string;
    let bPeriod: string;
    
    if (a.type === 'work') {
      aPeriod = a.period;
    } else {
      aPeriod = a.period;
    }
    
    if (b.type === 'work') {
      bPeriod = b.period;
    } else {
      bPeriod = b.period;
    }
    
    return getYear(bPeriod) - getYear(aPeriod);
  });

  return (
    <section className='py-24 px-4 sm:px-6 lg:px-8' id='experience'>
      {/* Enhanced Header */}
      <div className='max-w-7xl mx-auto mb-16'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center'
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent'>
              Professional & Educational
            </span>{' '}
            Journey
          </h1>
          <p className='text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            My career path in data science and AI, showcasing growth, impact, and continuous learning through work experience and education.
          </p>
        </motion.div>
      </div>

      {/* Enhanced Timeline */}
      <div className='max-w-6xl mx-auto'>
        <div className='relative'>
          {/* Timeline Line */}
          <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-400 to-cyan-500 transform md:-translate-x-0.5' />
          
          {/* Timeline Items */}
          <div className='space-y-12'>
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-black transform md:-translate-x-2 z-10 ${
                  item.type === 'work' ? 'bg-emerald-400' : 'bg-cyan-400'
                }`} />
                
                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <motion.div
                    className='group relative bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,185,129,0.15)] hover:border-emerald-400/30'
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Border Effect */}
                    <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                      <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/30 via-teal-400/30 to-cyan-400/30 blur-sm' />
                    </div>
                    
                    <div className='relative'>
                      {/* Header */}
                      <div className='flex items-start gap-4 mb-6'>
                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border ${
                          item.type === 'work' 
                            ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-emerald-500/30' 
                            : 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/30'
                        }`}>
                          {item.type === 'work' ? (
                            <FiHome className='w-8 h-8 text-emerald-400' />
                          ) : (
                            <FiAward className='w-8 h-8 text-cyan-400' />
                          )}
                        </div>
                        <div className='flex-1'>
                          <div className='flex items-center gap-2 mb-2'>
                            {item.type === 'work' ? (
                              getRoleIcon(item.title)
                            ) : (
                              <FiBookOpen className='w-4 h-4 text-cyan-400' />
                            )}
                            <span className={`text-sm font-medium uppercase tracking-wider ${
                              item.type === 'work' ? 'text-emerald-300' : 'text-cyan-300'
                            }`}>
                              {item.type === 'work' 
                                ? 'Previous Role'
                                : (item.status === 'current' ? 'Current Education' : 'Education')
                              }
                            </span>
                          </div>
                          <h3 className='text-xl md:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300 leading-tight'>
                            {item.type === 'work' ? item.title : item.degree}
                          </h3>
                          {item.type === 'education' && (
                            <p className='text-lg text-gray-300 mt-1'>
                              {item.institution}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className='space-y-4'>
                        <p className='text-gray-300 leading-relaxed text-sm md:text-base'>
                          {item.desc}
                        </p>
                        
                        {/* Key Achievements */}
                        <div className='space-y-2'>
                          {item.type === 'work' && (
                            <>
                              {item.id === 1 && (
                            <>
              <div className='flex items-center gap-2 text-sm text-emerald-300'>
                <FiTrendingUp className='w-3 h-3 text-emerald-400' />
                <span>Achieved 98%+ retrieval accuracy on AWS Bedrock through optimized vector embeddings</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-emerald-300'>
                <FiCode className='w-3 h-3 text-emerald-400' />
                <span>Reduced response time by 40% with multi-layered RAG and ReAct planning</span>
              </div>
              <div className='flex items-center gap-2 text-sm text-emerald-300'>
                <FiHome className='w-3 h-3 text-emerald-400' />
                <span>Improved user satisfaction scores by 35% on AI platforms (Ojavix & Hirin.ai)</span>
              </div>
                            </>
                          )}
                              {item.id === 2 && (
                            <>
                              <div className='flex items-center gap-2 text-sm text-emerald-300'>
                                <FiDatabase className='w-3 h-3 text-emerald-400' />
                                <span>Maintained large-scale Python/SQL pipelines</span>
                              </div>
                              <div className='flex items-center gap-2 text-sm text-emerald-300'>
                                <FiCode className='w-3 h-3 text-emerald-400' />
                                <span>Built NLP/ML apps with GPT integration</span>
                              </div>
                              <div className='flex items-center gap-2 text-sm text-emerald-300'>
                                <FiUsers className='w-3 h-3 text-emerald-400' />
                                <span>Documented scalable ML/LLM workflows</span>
                              </div>
                                </>
                              )}
                            </>
                          )}
                          
                          {item.type === 'education' && (
                            <>
                              <div className='flex items-center gap-2 text-sm text-cyan-300'>
                                <FiAward className='w-3 h-3 text-cyan-400' />
                                <span>GPA: {item.gpa}</span>
                              </div>
                              {item.achievements && item.achievements.slice(0, 2).map((achievement: string, idx: number) => (
                                <div key={idx} className='flex items-center gap-2 text-sm text-cyan-300'>
                                  <FiAward className='w-3 h-3 text-cyan-400' />
                                  <span>{achievement}</span>
                                </div>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className='mt-6 pt-4 border-t border-white/10'>
                        <div className='flex items-center justify-between'>
                          <div className='flex items-center gap-4 text-sm text-gray-400'>
                            <div className='flex items-center gap-2'>
                              <FiCalendar className='w-4 h-4' />
                              <span>{item.period}</span>
                            </div>
                            <div className='flex items-center gap-2'>
                              <FiMapPin className='w-4 h-4' />
                              <span>{item.type === 'work' ? item.location : item.location}</span>
                            </div>
                          </div>
                          <motion.div
                            className={`group-hover:transition-colors ${
                              item.type === 'work' ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-cyan-400 group-hover:text-cyan-300'
                            }`}
                            whileHover={{ x: 4 }}
                          >
                            <FiArrowRight className='w-5 h-5' />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-center mt-16'
        >
          <div className='bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl border border-emerald-500/20 p-8'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Build Something Amazing Together?
            </h3>
            <p className='text-gray-300 mb-6 max-w-2xl mx-auto'>
              I&apos;m always excited to collaborate on innovative projects and tackle challenging problems in AI and data science.
            </p>
            <motion.a
              href='#contact'
              className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/25'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let&apos;s Connect</span>
              <FiArrowRight className='w-4 h-4' />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience