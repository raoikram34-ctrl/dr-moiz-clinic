'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Advanced Technology',
    desc: 'State-of-the-art tools and digital imaging ensure precise, comfortable, and modern dental procedures.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
    )
  },
  {
    id: 2,
    title: 'Painless Treatments',
    desc: 'Utilising modern anaesthetics that guarantee painless treatments. Your comfort remains our absolute priority.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    )
  },
  {
    id: 3,
    title: 'Gentle & Caring',
    desc: 'Our compassionate team listens to your concerns and clearly explains every step of your treatment.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    )
  },
  {
    id: 4,
    title: 'Relaxing Environment',
    desc: 'Inviting aesthetics and a warm, cosy clinic atmosphere designed to make you feel completely at home.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
    )
  }
];

export default function WhyChooseUs() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section className="bg-card-bg py-24 border-y border-foreground/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Section Header (Sticky on Desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: customEase }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[2px] bg-secondary"></span>
              <span className="text-caption text-secondary/80">WHY CHOOSE US</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6, ease: customEase }}
              className="text-4xl md:text-5xl font-serif text-foreground mb-6"
            >
              Redefining the <br/>
              <span className="text-primary italic">dental experience.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2, duration: 0.6, ease: customEase }}
              className="text-body max-w-sm"
            >
              Dr. Moiz and our highly qualified team are dedicated to providing the best dental care, turning a traditionally intimidating visit into a stress-free journey.
            </motion.p>
          </div>

          {/* Features Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.id} 
                variants={itemVariants}
                className="bg-background p-8 rounded-[2rem] border border-foreground/5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-background transition-all duration-300 ease-out">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-card-desc leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}