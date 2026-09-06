'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: customEase } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: customEase } 
    },
  };

  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image with Experience Badge */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full h-[500px] lg:h-[650px]"
          >
            {/* Subtle background accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10"></div>
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-foreground/5">
              <Image 
                src="/home/about-image.jpg" // Add a professional picture of the clinic or doctor here
                alt="Dr. Moiz - Dental Professional"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Achievement Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: customEase }}
              className="absolute -bottom-8 right-4 lg:-right-8 bg-background p-6 lg:p-8 rounded-2xl shadow-xl border border-foreground/10 max-w-[260px] z-20"
            >
              <div className="flex flex-col gap-2">
                <span className="text-secondary">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
                <p className="text-foreground font-bold text-lg leading-snug">Excellence in Dentistry</p>
                <p className="text-card-desc text-sm">2nd Position Holder, Final Year Professional</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start lg:pl-10"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-secondary"></span>
              <span className="text-caption">About The Consultant</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-foreground mb-6">
              Combining artistry with <br />
              <span className="text-accent-serif text-primary">clinical excellence.</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lead mb-6">
              With a foundation of rigorous academic achievement and a passion for modern aesthetics, we deliver dental care that prioritizes both your health and comfort.
            </motion.p>

            <motion.p variants={itemVariants} className="text-body mb-10">
              Holding a BDS degree from the prestigious Fatima Jinnah Dental College (2018-2022), Dr. Moiz brings top-tier expertise to every procedure. We believe that visiting the dentist shouldn't be an intimidating experience. Our minimal, calming clinic environment is designed to put you at ease while we craft your perfect smile.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link 
                href="/about"
                className="inline-flex items-center gap-3 text-primary font-semibold hover:text-secondary transition-colors duration-300 group"
              >
                <span className="border-b-2 border-primary group-hover:border-secondary transition-colors pb-1">
                  Read Full Story
                </span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}