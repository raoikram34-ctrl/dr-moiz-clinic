'use client';

import { motion } from 'framer-motion';

const statsData = [
  { 
    id: 1, 
    number: '5k+', 
    title: 'Happy Smiles', 
    desc: 'Transforming confidence with precise aesthetic and clinical care.' 
  },
  { 
    id: 2, 
    number: '99%', 
    title: 'Painless Care', 
    desc: 'Using the latest technology for a smooth, stress-free experience.' 
  },
  { 
    id: 3, 
    number: '10+', 
    title: 'Years Experience', 
    desc: 'Trusted expertise with a track record of dental excellence.' 
  },
];

export default function Stats() {
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
      // Yahan 'as const' add kiya gaya hai
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  return (
    <section className="bg-background py-16 border-t border-b border-foreground/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-foreground/10"
        >
          {statsData.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              variants={itemVariants}
              className={`flex flex-col ${index !== 0 ? 'md:pl-8 pt-8 md:pt-0' : ''}`}
            >
              {/* Premium serif styling for big numbers matching the "Clinic" logo font */}
              <h2 className="text-5xl lg:text-6xl text-primary font-serif mb-3 tracking-tight">
                {stat.number}
              </h2>
              <h5 className="text-foreground font-semibold uppercase tracking-wider text-sm mb-2">
                {stat.title}
              </h5>
              <p className="text-card-desc max-w-xs">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}