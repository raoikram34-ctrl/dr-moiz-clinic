'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const treatments = [
  "General Checkup & Consultation",
  "Dental Implants",
  "Full Mouth Rehabilitation",
  "Crowns and Bridges",
  "Tooth Extractions",
  "Scaling and Polishing",
  "Dentures",
  "Smile Makeover / Veneers",
  "Clearpath Orthodontics"
];

export default function ContactPage() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you! Your appointment request has been received. We will contact you shortly to confirm.");
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      
      {/* 1. Page Header with Background Image & Premium Overlay */}
      <section className="relative overflow-hidden flex flex-col items-center text-center min-h-[60vh] lg:min-h-[70vh] justify-center px-6 lg:px-12 pt-32 pb-16">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/home/expertise-hero-bg.jpg"
            alt="Contact Dr. Moiz Clinic"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        
        {/* Overlay Layer - Light frosted glass & smooth blend */}
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px] z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10"></div>
        
        {/* Header Content */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-3xl mx-auto relative z-20 mt-10"
        >
          <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-4 mb-8">
            
            <span className="text-sm md:text-base text-primary font-extrabold tracking-[0.2em] uppercase bg-white/60 backdrop-blur-md px-5 py-1.5 rounded-full border border-white/50 shadow-sm">
              Book Appointment
            </span>
            
          </motion.div>
          
          <motion.h1 variants={fadeUpVariant} className="text-5xl lg:text-7xl font-serif text-foreground tracking-tight mb-6 drop-shadow-sm">
            Let's perfect your <br className="hidden md:block" />
            <span className="text-primary italic">smile.</span>
          </motion.h1>
          
          <motion.p variants={fadeUpVariant} className="text-lead text-foreground/90 max-w-2xl mx-auto font-medium drop-shadow-md">
            Schedule your consultation with Dr. Moiz today. Fill out the form below, and our team will get back to you to confirm your appointment.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. Main Content (Contact Details & Form) */}
      <section className="py-16 lg:py-24 px-6 lg:px-12 relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Contact Details & Location */}
          <motion.div 
            initial="hidden" animate="visible" variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Contact Info Card */}
            <motion.div variants={fadeUpVariant} className="bg-white p-8 lg:p-10 rounded-[2rem] border border-foreground/5 shadow-xl shadow-foreground/[0.02]">
              <h3 className="text-2xl font-serif text-foreground mb-8">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Phone</h5>
                    <a href="tel:+923332012468" className="text-foreground/70 hover:text-primary transition-colors">+92 333 201 2468</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Email</h5>
                    <a href="mailto:hello@drmoizclinic.com" className="text-foreground/70 hover:text-primary transition-colors">hello@drmoizclinic.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-dark shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Opening Hours</h5>
                    <p className="text-foreground/70">Monday - Sunday</p>
                    <p className="text-primary font-medium mt-1">4:00 PM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground mb-1">Location</h5>
                    <p className="text-foreground/70 leading-relaxed">
                      Dr Moiz's Dental Clinic,<br/>
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Optional Map Placeholder */}
            <motion.div variants={fadeUpVariant} className="w-full h-48 bg-card-bg rounded-[2rem] border border-foreground/5 overflow-hidden relative flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/5"></div>
              <p className="text-foreground/50 font-medium z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                Google Map Integration Here
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Booking Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: customEase }}
            className="lg:col-span-7 bg-white p-8 lg:p-12 rounded-[2rem] border border-foreground/5 shadow-2xl shadow-primary/5"
          >
            <h3 className="text-3xl font-serif text-foreground mb-2">Request an Appointment</h3>
            <p className="text-body text-foreground/60 mb-8">Please fill in your details and we will confirm your booking shortly.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-foreground">Full Name *</label>
                  <input 
                    type="text" id="name" required
                    placeholder="John Doe"
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-foreground">Phone Number *</label>
                  <input 
                    type="tel" id="phone" required
                    placeholder="+92 3XX XXXXXXX"
                    value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-foreground">Email Address (Optional)</label>
                <input 
                  type="email" id="email"
                  placeholder="john@example.com"
                  value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Treatment Selection */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="treatment" className="text-sm font-bold text-foreground">Required Treatment *</label>
                  <div className="relative">
                    <select 
                      id="treatment" required
                      value={formData.treatment} onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                      className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a treatment</option>
                      {treatments.map((treatment, idx) => (
                        <option key={idx} value={treatment}>{treatment}</option>
                      ))}
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Preferred Date */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="date" className="text-sm font-bold text-foreground">Preferred Date *</label>
                  <input 
                    type="date" id="date" required
                    value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground text-opacity-80"
                  />
                </div>
              </div>

              {/* Message / Notes */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-foreground">Message / Symptoms (Optional)</label>
                <textarea 
                  id="message" rows={4}
                  placeholder="Briefly describe your concern..."
                  value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-background/50 border border-foreground/10 rounded-xl px-4 py-3.5 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-secondary hover:text-background transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-secondary/20 mt-2"
              >
                Confirm Booking Request
              </button>

            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
}