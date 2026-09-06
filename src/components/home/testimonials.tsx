'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    treatment: "Smile Makeover",
    review: "I had extreme dental anxiety, but Dr. Moiz and his team completely changed my perspective. The entire process was genuinely painless, and the clinic feels more like a relaxing lounge than a hospital.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ali Hassan",
    treatment: "Dental Implants",
    review: "The level of professionalism here is unmatched. From the digital scanning to the final implant placement, everything was explained clearly. My new smile looks absolutely natural.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatima Khan",
    treatment: "Root Canal & Crown",
    review: "I was dreading my procedure, but the gentle approach and modern technology made it so comfortable. Easily the best dental experience I've ever had in Karachi. Highly recommended!",
    rating: 5,
  }
];

export default function Testimonials() {
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
    <section className="bg-background py-24 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl -z-10 rounded-full translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: customEase }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-[2px] bg-secondary"></span>
            <span className="text-caption text-secondary/80">PATIENT STORIES</span>
            <span className="w-8 h-[2px] bg-secondary"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: customEase }}
            className="text-4xl md:text-5xl font-serif text-foreground max-w-2xl"
          >
            Smiles transformed with <br/>
            <span className="text-primary italic">absolute care.</span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              variants={itemVariants}
              className="relative bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-foreground/5 shadow-lg shadow-foreground/[0.02] hover:-translate-y-2 transition-transform duration-500 ease-out flex flex-col justify-between group"
            >
              {/* Large Quote Watermark */}
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <div>
                {/* 5-Star Rating (Using Secondary Yellow Color) */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-8 relative z-10 text-base md:text-lg">
                  "{testimonial.review}"
                </p>
              </div>

              <div className="border-t border-foreground/10 pt-4 mt-auto">
                <h6 className="text-foreground font-bold text-lg">{testimonial.name}</h6>
                <p className="text-primary text-sm font-medium">{testimonial.treatment}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}