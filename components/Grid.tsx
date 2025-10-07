"use client";
import React from 'react'
import { Sora } from 'next/font/google'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const sora = Sora({ subsets: ["latin"], weight: ["400","500","600","700","800"] });

const Grid = () => {
  return (
    <section id="about" className={sora.className}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <BentoGrid>
            {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
               <BentoGridItem
                id= {id}
                key = {id}
                title = {title}
                description = {description}
                className={className}
                img = {img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
               /> 
            ))}
        </BentoGrid>
        </div>
    </section>
  )
}

export default Grid