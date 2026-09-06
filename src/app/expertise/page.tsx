'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CTA from '@/components/home/cta';

const procedures = [
  {
    id: 1,
    title: 'Dental Implants',
    subtitle: 'Permanent & Natural-Looking',
    description: 'Restore your smile and confidence with our state-of-the-art dental implants. Crafted with absolute precision, these titanium posts act as artificial roots, providing a permanent and sturdy foundation for replacement teeth that look, feel, and function exactly like your natural ones.',
    features: ['Titanium biocompatible materials', 'Prevents bone loss', 'Lifetime durability with proper care'],
    image: '/home/gallery-1.jpg'
  },
  {
    id: 2,
    title: 'Full Mouth Rehabilitation',
    subtitle: 'Comprehensive Restoration',
    description: 'A complete overhaul of your oral health. This highly customized treatment plan combines multiple restorative procedures to rebuild every tooth in your mouth. Ideal for patients with severe wear, multiple missing teeth, or complex bite issues.',
    features: ['Customized treatment mapping', 'Restores proper chewing function', 'Complete aesthetic makeover'],
    image: '/home/gallery-2.jpg'
  },
  {
    id: 3,
    title: 'Crowns and Bridges',
    subtitle: 'Seamless Blending',
    description: 'Protect damaged teeth or fill gaps left by missing ones with our premium custom-crafted crowns and bridges. Using high-quality, tooth-colored materials, we ensure your restorations blend flawlessly with your surrounding teeth for a perfect smile.',
    features: ['High-strength porcelain/ceramic', 'Stain-resistant materials', 'Restores natural tooth shape'],
    image: '/home/gallery-3.jpg'
  },
  {
    id: 4,
    title: 'Tooth Extractions',
    subtitle: 'Simple & Complicated Cases',
    description: 'Whether it is a simple extraction for a severely decayed tooth or a complicated surgical removal of impacted wisdom teeth, our gentle approach and modern anesthetics guarantee a painless, stress-free procedure in a calming environment.',
    features: ['100% Painless modern anesthesia', 'Surgical and non-surgical options', 'Rapid recovery protocols'],
    image: '/home/gallery-4.jpg'
  },
  {
    id: 5,
    title: 'Scaling and Polishing',
    subtitle: 'Deep Cleaning & Prevention',
    description: 'Maintain optimal gum health and a brighter smile with our professional scaling and polishing services. We meticulously remove stubborn plaque and calculus (tartar) that regular brushing misses, preventing gum disease and instantly refreshing your breath.',
    features: ['Ultrasonic plaque removal', 'Stain reduction for a brighter smile', 'Improves overall gum health'],
    image: '/home/gallery-1.jpg'
  },
  {
    id: 6,
    title: 'Dentures',
    subtitle: 'Comfortable & Custom-Fitted',
    description: 'Regain your ability to eat, speak, and smile confidently with our custom-fitted complete or partial dentures. Designed for maximum comfort and a natural aesthetic, our removable prosthetics are tailored precisely to your facial structure.',
    features: ['Lightweight and comfortable fit', 'Natural gum and tooth shading', 'Easy to clean and maintain'],
    image: '/home/gallery-2.jpg'
  }
];

export default function ExpertisePage() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: customEase } 
    },
  };

  return (
    <div className="bg-background min-h-screen">
      
        {/* Page Header with Background Image & Premium Overlay */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 lg:px-12 relative overflow-hidden flex flex-col items-center text-center min-h-[60vh] justify-center">
        
        {/* 1. Background Image Layer (z-0) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/home/expertise-hero-bg.jpg"
            alt="Dr. Moiz Clinic Consultation"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        
        {/* 2. Overlay Layer (z-10) - Light frosted glass */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        
        {/* 3. Content Layer (z-20) */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="max-w-3xl mx-auto relative z-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
           
            <span className="text-sm md:text-base text-primary font-extrabold tracking-[0.2em] uppercase bg-white/60 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/50 shadow-sm">
              Clinical Expertise
            </span>
            
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif text-foreground tracking-tight mb-6">
            Advanced treatments, <br />
            <span className="text-primary italic">exceptional results.</span>
          </h1>
          
          <p className="text-lead text-foreground/90 max-w-2xl mx-auto">
            From routine maintenance to complex surgical rehabilitations, discover our comprehensive range of painless, technology-driven dental procedures.
          </p>
        </motion.div>
      </section>

      {/* Procedures Z-Pattern Layout */}
      <section className="py-12 lg:py-20 relative z-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-24 lg:gap-32">
          {procedures.map((proc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={proc.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Column */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: customEase }}
                  className={`relative w-full h-[400px] lg:h-[550px] ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] rotate-3 -z-10 transition-transform duration-500 hover:rotate-6"></div>
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-foreground/5 shadow-2xl shadow-foreground/5 group">
                    <Image 
                      src={proc.image}
                      alt={proc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </motion.div>

                {/* Content Column */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: customEase, delay: 0.2 }}
                  className={`flex flex-col items-start ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <span className="text-secondary font-bold tracking-widest text-sm uppercase mb-3">
                    {proc.subtitle}
                  </span>
                  
                  <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-6">
                    {proc.title}
                  </h2>
                  
                  <p className="text-body text-foreground/80 leading-relaxed mb-8">
                    {proc.description}
                  </p>

                  <ul className="flex flex-col gap-4 w-full">
                    {proc.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 bg-card-bg p-4 rounded-xl border border-foreground/5">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
      
    </div>
  );
}