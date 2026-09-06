'use client';

import { motion } from 'framer-motion';

// Combining Simple & Complicated Extractions into one clean service card for a balanced grid, 
// but highlighting both in the description.
const expertiseData = [
  {
    id: 1,
    title: 'Dental Implants',
    desc: 'Permanent, natural-looking tooth replacements crafted with absolute precision to restore your confidence.',
    icon: '🦷', // You can replace these with actual SVG icons later
  },
  {
    id: 2,
    title: 'Full Mouth Rehabilitation',
    desc: 'Comprehensive restorative treatments designed to rebuild and optimize your complete oral health.',
    icon: '✨',
  },
  {
    id: 3,
    title: 'Crowns and Bridges',
    desc: 'Custom-crafted, durable restorations that seamlessly blend with your natural teeth.',
    icon: '👑',
  },
  {
    id: 4,
    title: 'Tooth Extractions',
    desc: 'Safe and painless procedures for both simple and complicated extractions in a relaxing environment.',
    icon: '🛡️',
  },
  {
    id: 5,
    title: 'Dentures',
    desc: 'Comfortable, custom-fitted removable prosthetics to restore function and facial aesthetics.',
    icon: '😁',
  },
  {
    id: 6,
    title: 'Scaling and Polishing',
    desc: 'Professional deep cleaning to remove plaque and tartar, ensuring a brighter, healthier smile.',
    icon: '✨',
  },
];

export default function Expertise() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: customEase } 
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
            <span className="text-caption">Our Services</span>
            <span className="w-8 h-[2px] bg-secondary"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: customEase }}
            className="text-foreground max-w-2xl"
          >
            Premium clinical <span className="text-accent-serif text-primary">expertise.</span>
          </motion.h2>
        </div>

        {/* Expertise Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {expertiseData.map((item) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants}
              className="group relative bg-background border border-foreground/5 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col items-start"
            >
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] -z-10"></div>
              
              <div className="w-14 h-14 rounded-2xl bg-secondary/15 flex items-center justify-center text-2xl mb-6 text-secondary group-hover:scale-110 transition-transform duration-500 ease-out">
                {item.icon}
              </div>
              
              <h4 className="text-card-title mb-3 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-card-desc">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}