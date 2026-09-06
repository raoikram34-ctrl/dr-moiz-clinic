'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const certifications = [
  "Certificate in Perio & Implantology (Academy of Orofacial Aesthetics)",
  "Clearpath Orthodontics Certified (Clear Aligners)",
  "Certificate in Smile Makeover (Direct Composite Veneers) by Style Italiano"
];

const experience = [
  "CEO & Head Dentist at Dr Moiz's Dental Clinic",
  "Associate Dentist at Fast Track Dental Clinic",
  "Associate Dentist at Dr Mahmood Shah and Associates"
];

export default function Consultant() {
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

  return (
    <section className="bg-background py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left Column - Content & Credentials */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start z-10"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="w-10 h-[2px] bg-secondary"></span>
              <span className="text-caption text-secondary/80">LEAD CONSULTANT</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-5xl lg:text-7xl font-serif text-foreground mb-4 tracking-tight">
              Dr. Moiz
            </motion.h2>
            
            {/* Enhanced Degree & College Badge */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-12">
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-primary/20">
                BDS, Gold Medalist
              </span>
              <span className="text-foreground/50 text-sm font-medium pl-2">
                Fatima Jinnah Dental College
              </span>
            </motion.div>

            <div className="w-full flex flex-col gap-10">
              {/* Premium Certifications List */}
              <motion.div variants={itemVariants}>
                <h5 className="flex items-center gap-3 text-lg font-bold text-foreground mb-5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary text-lg">✦</span>
                  Certifications
                </h5>
                <ul className="flex flex-col gap-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-foreground/[0.03] transition-colors duration-300">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-foreground/80 leading-relaxed text-sm md:text-base">{cert}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Premium Experience List */}
              <motion.div variants={itemVariants}>
                <h5 className="flex items-center gap-3 text-lg font-bold text-foreground mb-5">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/10 text-secondary text-lg">✦</span>
                  Professional Experience
                </h5>
                <ul className="flex flex-col gap-2">
                  {experience.map((exp, index) => (
                    <li key={index} className="flex items-start gap-4 p-3 -ml-3 rounded-xl hover:bg-foreground/[0.03] transition-colors duration-300">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 border border-primary/20">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <span className="text-foreground/80 leading-relaxed text-sm md:text-base">{exp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Image & Gold Medal Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: customEase }}
            className="relative w-full h-[550px] lg:h-[750px] lg:pl-10 z-10"
          >
            {/* Minimal Depth Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 rounded-[3rem] -z-10 rotate-3"></div>
            
            {/* Image Wrapper (overflow-hidden only here) */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-foreground/5 border border-foreground/10">
              <Image 
                src="/home/dr-moiz-portrait.jpeg" 
                alt="Dr. Moiz - Lead Consultant"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Floating Gold Medal Badge (Safely overlapping) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8, ease: customEase }}
              className="absolute top-10 -left-6 lg:left-0 bg-background p-5 rounded-2xl shadow-2xl border border-secondary/20 flex items-center gap-4 z-30"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div className="pr-3">
                <p className="text-foreground font-bold text-lg leading-none mb-1">Gold Medalist</p>
                <p className="text-secondary text-[10px] uppercase tracking-widest font-bold">Academic Excellence</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}