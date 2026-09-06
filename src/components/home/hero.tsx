'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: customEase } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 1.5, ease: customEase } 
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background py-20 lg:py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start z-10"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-secondary"></span>
              <span className="text-caption">Premium Dental Care</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-foreground mb-6">
              Redefining your smile with <br />
              <span className="text-accent-serif text-primary">absolute precision.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lead mb-10 max-w-md">
              Experience painless, modern dentistry in a calming environment. Your confidence begins with a healthy smile.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/contact"
                className="bg-primary text-background px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-primary/20 text-center"
              >
                Book Consultation
              </Link>
              <Link 
                href="/expertise"
                className="bg-transparent text-foreground border border-foreground/10 px-8 py-4 rounded-full text-base font-medium hover:border-foreground/30 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                Our Expertise
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Column - Wrapper WITHOUT overflow-hidden */}
          <motion.div 
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative w-full h-[450px] sm:h-[550px] lg:h-[650px] z-10"
          >
            {/* Minimal Background Blob for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
            
            {/* Actual Image Container WITH overflow-hidden */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-foreground/5">
              <Image 
                src="/home/hero-image.jpg"
                alt="Premium Dental Care Experience"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Floating Trust Badge - Now safely overlapping the edge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: customEase }}
              className="absolute bottom-8 -left-4 lg:-left-12 bg-white p-5 lg:p-6 rounded-2xl shadow-xl border border-foreground/5 flex items-center gap-4 z-30"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-extrabold text-lg lg:text-xl leading-none">100%</p>
                <p className="text-foreground/60 text-[10px] lg:text-xs mt-1 uppercase tracking-widest font-bold">Painless Care</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}