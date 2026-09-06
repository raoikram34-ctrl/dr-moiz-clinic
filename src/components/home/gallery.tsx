'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    src: '/home/gallery-1.jpg',
    alt: 'Premium Clinic Interior',
    // Big showcase image (2 columns wide, 2 rows tall)
    className: 'md:col-span-2 md:row-span-2 h-[300px] md:h-[624px]', 
    caption: 'Relaxing Clinic Environment'
  },
  {
    id: 2,
    src: '/home/gallery-2.jpg',
    alt: 'Advanced Dental Technology',
    // Wide image (2 columns wide, 1 row tall)
    className: 'md:col-span-2 md:row-span-1 h-[300px]',
    caption: 'State-of-the-Art Technology'
  },
  {
    id: 3,
    src: '/home/gallery-3.jpg',
    alt: 'Painless Care',
    // Square image (1 column, 1 row)
    className: 'md:col-span-1 md:row-span-1 h-[300px]',
    caption: 'Expert Care'
  },
  {
    id: 4,
    src: '/home/gallery-4.jpg',
    alt: 'Happy Patient Smile',
    // Square image (1 column, 1 row)
    className: 'md:col-span-1 md:row-span-1 h-[300px]',
    caption: 'Confident Smiles'
  },
];

export default function Gallery() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: customEase } 
    },
  };

  return (
    <section className="bg-background py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-secondary"></span>
            <span className="text-caption text-secondary/80">OUR CLINIC</span>
            <span className="w-8 h-[2px] bg-secondary"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl font-serif text-foreground max-w-2xl"
          >
            A glimpse inside our <br/>
            <span className="text-primary italic">modern facility.</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
        >
          {galleryImages.map((img) => (
            <motion.div 
              key={img.id} 
              variants={itemVariants}
              className={`relative group rounded-[2rem] overflow-hidden bg-card-bg border border-foreground/5 shadow-sm ${img.className}`}
            >
              <Image 
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Premium Hover Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-end p-8">
                <p className="text-white font-semibold text-lg md:text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}