'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CTA from '@/components/home/cta';

const certifications = [
  {
    id: 1,
    title: "Perio & Implantology",
    institute: "Academy of Orofacial Aesthetics",
    desc: "Advanced training in the surgical placement of dental implants and comprehensive periodontal (gum) therapies, ensuring long-lasting and natural-looking restorations.",
    icon: "🦷"
  },
  {
    id: 2,
    title: "Clearpath Orthodontics",
    institute: "Certified Provider",
    desc: "Specialized certification in providing invisible clear aligners, offering patients a discreet, comfortable, and highly effective alternative to traditional metal braces.",
    icon: "✨"
  },
  {
    id: 3,
    title: "Smile Makeover",
    institute: "Style Italiano",
    desc: "Mastery in Direct Composite Veneers guided by the prestigious Style Italiano philosophy. Focused on delivering highly aesthetic, minimally invasive smile transformations.",
    icon: "🌟"
  }
];

const experience = [
  {
    id: 1,
    role: "CEO & Head Dentist",
    clinic: "Dr Moiz's Dental Clinic",
    duration: "Present",
    desc: "Leading a state-of-the-art dental practice, overseeing clinical excellence, adopting advanced dental technologies, and ensuring an unparalleled, pain-free patient experience.",
    current: true
  },
  {
    id: 2,
    role: "Associate Dentist",
    clinic: "Fast Track Dental Clinic",
    duration: "Previous Role",
    desc: "Performed a wide range of restorative and aesthetic procedures, managing high patient volumes while maintaining strict clinical protocols and patient satisfaction.",
    current: false
  },
  {
    id: 3,
    role: "Associate Dentist",
    clinic: "Dr Mahmood Shah and Associates",
    duration: "Previous Role",
    desc: "Gained extensive hands-on experience in complex extractions, root canal treatments, and comprehensive prosthodontic rehabilitations alongside senior specialists.",
    current: false
  }
];

export default function ConsultantPage() {
  const customEase = [0.16, 1, 0.3, 1] as const;

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } },
  };

  return (
    <div className="bg-background min-h-screen">
      
      {/* 1. Hero Portfolio Section */}
      <section className="pt-32 pb-20 lg:pt-10 lg:pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div 
            initial="hidden" animate="visible" variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            <motion.div variants={fadeUpVariant} className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-secondary rounded-full"></span>
              <span className="text-caption text-secondary/90 tracking-[0.2em] uppercase">
                Founder & Lead Consultant
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUpVariant} className="text-6xl lg:text-8xl font-serif text-foreground tracking-tight mb-4">
              Dr. Moiz
            </motion.h1>
            
            <motion.h3 variants={fadeUpVariant} className="text-xl lg:text-2xl font-medium text-primary mb-8 flex items-center gap-3 flex-wrap">
              Aesthetic & Restorative Dentist
            </motion.h3>

            <motion.p variants={fadeUpVariant} className="text-lead text-foreground/80 mb-10 leading-relaxed">
              "Dentistry is the perfect intersection of art and science. My vision has always been to create a space where clinical precision meets absolute patient comfort. Every procedure is a step towards restoring not just a smile, but the confidence behind it."
            </motion.p>
          </motion.div>

          {/* Hero Portrait */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: customEase }}
            className="lg:col-span-5 relative w-full h-[550px] lg:h-[700px] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/5 border border-foreground/5 z-10"
          >
            <Image 
              src="/home/dr-moiz-portrait.jpeg"
              alt="Dr. Moiz Portrait"
              fill
              priority
              className="object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Education & Academic Excellence (Dedicated Section with Logo) */}
      <section className="py-20 lg:py-32 bg-white relative border-y border-foreground/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Heading */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            >
              <motion.h2 variants={fadeUpVariant} className="text-4xl lg:text-5xl font-serif text-foreground mb-6">
                Academic <span className="text-primary italic">Excellence.</span>
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-body text-foreground/70 max-w-md mb-8">
                A solid foundation built on rigorous training and exceptional performance at one of the country's most prestigious dental institutions.
              </motion.p>
            </motion.div>

            {/* Right: Education Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: customEase }}
              className="bg-background p-8 lg:p-12 rounded-[2rem] border border-foreground/5 shadow-xl shadow-foreground/5 relative"
            >
              {/* College Logo Placeholder */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-white rounded-full p-2 shadow-sm border border-foreground/5 flex items-center justify-center overflow-hidden">
                 {/* Replace this div with the actual logo image when you have it */}
                 <span className="text-xs font-bold text-center text-foreground/40 leading-tight">FJDC<br/>LOGO</span>
                 {/* <Image src="/home/fjdc-logo.png" alt="FJDC Logo" fill className="object-contain p-2" /> */}
              </div>

              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide border border-primary/20 mb-6 inline-block">
                BDS (2018 - 2022)
              </span>

              <h3 className="text-3xl font-serif text-foreground mb-2">Fatima Jinnah Dental College</h3>
              <p className="text-foreground/60 font-medium mb-8">Bachelor of Dental Surgery</p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-lg">Gold Medalist</h5>
                    <p className="text-card-desc text-sm">Awarded for outstanding overall performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 mt-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-lg">2nd Position Holder</h5>
                    <p className="text-card-desc text-sm">Secured 2nd position in the Final Year Professional Exam.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Global Certifications (Detailed Bento Grid) */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-4">Global <span className="text-primary italic">Certifications.</span></h2>
            <p className="text-body text-foreground/70 max-w-2xl mx-auto">Continuous education and mastery of the latest international dental technologies.</p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {certifications.map((cert) => (
              <motion.div 
                key={cert.id} 
                variants={fadeUpVariant}
                className="bg-white p-8 lg:p-10 rounded-[2rem] border border-foreground/5 hover:border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-6">{cert.institute}</p>
                <p className="text-card-desc leading-relaxed">{cert.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Professional Experience (Sleek Timeline) */}
      <section className="py-20 lg:py-32 bg-card-bg border-y border-foreground/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-serif text-foreground mb-4">Professional <span className="text-primary italic">Experience.</span></h2>
          </motion.div>

          <div className="relative border-l-2 border-foreground/10 pl-8 lg:pl-12 space-y-16">
            {experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: customEase, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className={`absolute -left-[42px] lg:-left-[58px] top-1 w-6 h-6 rounded-full border-4 border-card-bg ${exp.current ? 'bg-primary' : 'bg-foreground/20'}`}></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                  <h3 className={`text-2xl lg:text-3xl font-bold ${exp.current ? 'text-primary' : 'text-foreground'}`}>
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="w-fit bg-primary/10 text-primary px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">
                      Present
                    </span>
                  )}
                </div>
                
                <h4 className="text-xl text-foreground/70 font-serif mb-4">{exp.clinic}</h4>
                <p className="text-body text-foreground/80 leading-relaxed max-w-2xl">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <CTA />

    </div>
  );
}