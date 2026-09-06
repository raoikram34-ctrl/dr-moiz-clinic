'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: customEase, staggerChildren: 0.15 },
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
    <section className="bg-background py-24 pb-32 relative z-10 px-6 lg:px-12">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-10 lg:p-16 overflow-hidden relative shadow-2xl shadow-primary/20"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Heading & Button */}
          <div className="flex flex-col items-start">
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-6 leading-tight">
              Ready to transform <br/> your <span className="text-secondary italic">smile?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/80 text-lg mb-10 max-w-md">
              Book your consultation today and experience premium, painless dental care tailored just for you.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-background text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary hover:text-background transition-all duration-300 shadow-xl hover:scale-105"
              >
                Book Appointment Now
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Contact & Hours (Using your exact details) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-10">
            {/* Opening Hours */}
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h5 className="text-white font-bold mb-2">Opening Hours</h5>
              <p className="text-white/70 text-sm mb-1">Monday - Sunday</p>
              <p className="text-white font-medium text-lg">4:00 PM - 10:00 PM</p>
            </motion.div>

            {/* Contact Details */}
            <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h5 className="text-white font-bold mb-2">Contact Us</h5>
              <a href="tel:+923332012468" className="block text-white/70 hover:text-white transition-colors text-sm mb-1">
                +92 333 201 2468
              </a>
              <a href="mailto:hello@drmoizclinic.com" className="block text-white/70 hover:text-white transition-colors text-sm">
                hello@drmoizclinic.com
              </a>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants} className="sm:col-span-2 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h5 className="text-white font-bold mb-1">Clinic Address</h5>
                <p className="text-white/70 text-sm leading-relaxed">
                  Karachi, Pakistan (Complete address goes here)
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}