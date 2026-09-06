'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Importing existing homepage components
import WhyChooseUs from '@/components/home/why-choose-us';
import Testimonials from '@/components/home/testimonials';
import CTA from '@/components/home/cta';

export default function AboutPage() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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
    <div className="bg-background min-h-screen">
      
      {/* 1. About Us Hero & Story Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div className="flex flex-col items-start z-10">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-secondary"></span>
                <span className="text-caption text-secondary/80">OUR STORY</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-serif text-foreground tracking-tight mb-8">
                Crafting smiles with <span className="text-primary italic">passion and precision.</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lead mb-6">
                At Dr. Moiz's Dental Clinic, we believe that visiting the dentist shouldn't be a stressful experience. We have meticulously designed our practice to feel warm, welcoming, and entirely centered around your comfort.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-body text-foreground/70">
                From simple scaling to complete full-mouth rehabilitations, our approach is rooted in advanced clinical expertise and a gentle touch. We combine modern technology with a deep understanding of aesthetics to deliver results that look natural and last a lifetime.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="relative w-full h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-foreground/5 border border-foreground/10">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
               <Image 
                 src="/home/gallery-1.jpg" // Reusing a gallery image or add a new /about/story.jpg
                 alt="Moiz Dental Clinic Interior"
                 fill
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover object-center"
                 priority
               />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Mission & Vision Section (Bento Cards) */}
      <section className="py-20 bg-card-bg border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mission Card */}
            <motion.div variants={itemVariants} className="bg-background p-10 lg:p-14 rounded-[2rem] border border-foreground/5 hover:shadow-xl transition-shadow duration-500">
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center text-secondary mb-8">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-serif text-foreground mb-4">Our Mission</h3>
              <p className="text-body text-foreground/80 leading-relaxed">
                To provide pain-free, state-of-the-art dental care in a relaxing environment. We strive to educate our patients, alleviate their dental anxiety, and deliver exceptional aesthetic and functional results that empower their confidence.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div variants={itemVariants} className="bg-background p-10 lg:p-14 rounded-[2rem] border border-foreground/5 hover:shadow-xl transition-shadow duration-500">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-serif text-foreground mb-4">Our Vision</h3>
              <p className="text-body text-foreground/80 leading-relaxed">
                To be the most trusted and advanced dental and oro-facial aesthetic center, recognized for our commitment to absolute precision, continuous innovation, and an unwavering dedication to patient satisfaction.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Detailed Consultant Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
          >
            {/* Image Column */}
            <motion.div variants={itemVariants} className="lg:col-span-5 relative w-full h-[500px] lg:h-[700px] lg:sticky lg:top-32">
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-foreground/10 border border-foreground/10">
                <Image 
                  src="/home/dr-moiz-portrait.jpeg"
                  alt="Dr. Moiz - Lead Dentist"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col items-start lg:pl-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-[2px] bg-secondary"></span>
                <span className="text-caption text-secondary/80">MEET THE EXPERT</span>
              </div>
              
              <h2 className="text-5xl font-serif text-foreground mb-2 tracking-tight">Dr. Moiz</h2>
              <h4 className="text-primary font-medium mb-8 text-lg">
                CEO & Head Dentist
              </h4>

              <div className="space-y-6 text-body text-foreground/80 mb-12">
                <p>
                  Holding a BDS degree from the prestigious Fatima Jinnah Dental College (2018-2022), Dr. Moiz has established a reputation for excellence, graduating as a Gold Medalist and securing the 2nd position in his final year professional exams.
                </p>
                <p>
                  With extensive experience across top-tier clinics, including Fast Track Dental Clinic and Dr. Mahmood Shah and Associates, he combines rigorous academic knowledge with hands-on clinical mastery. His approach is entirely patient-centric, focusing on pain-free procedures and aesthetic perfection.
                </p>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
                
                {/* Education */}
                <div className="bg-card-bg p-6 rounded-2xl border border-foreground/5">
                  <h5 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-secondary text-xl">✦</span> Education
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>BDS - Fatima Jinnah Dental College (2018-2022)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="font-semibold text-foreground">Gold Medalist</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>2nd Position in Final Year Professional Exam</span>
                    </li>
                  </ul>
                </div>

                {/* Certifications */}
                <div className="bg-card-bg p-6 rounded-2xl border border-foreground/5">
                  <h5 className="font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="text-secondary text-xl">✦</span> Certifications
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Perio & Implantology (Academy of Orofacial Aesthetics)</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Clearpath Orthodontics Certified</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Smile Makeover (Direct Composite Veneers) by Style Italiano</span>
                    </li>
                  </ul>
                </div>

              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. Reusing Homepage Components for continuity and conversion */}
      <WhyChooseUs />
      <Testimonials />
      <CTA />

    </div>
  );
}