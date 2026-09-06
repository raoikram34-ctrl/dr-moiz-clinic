'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'Consultant', path: '/consultant' },
  { name: 'About', path: '/about' },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll direction detect kar ke header hide/show karna
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 100 && latest > previous) {
      setHidden(true); // Scrolling down
    } else {
      setHidden(false); // Scrolling up
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <Image 
            src="/logo/dr-moiz-logo-06.png" 
            alt="Moiz Dental Clinic" 
            width={160} 
            height={60} 
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className="text-body font-medium relative group"
            >
              {link.name}
              {/* Premium smooth underline hover effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
          <Link 
            href="/contact"
            className="bg-primary text-background px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-transform duration-300"></span>
          <span className="block w-6 h-0.5 bg-current mb-1.5"></span>
          <span className="block w-4 h-0.5 bg-current transition-transform duration-300 ml-auto"></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div 
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden bg-background overflow-hidden border-b border-foreground/10"
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className="text-body text-xl font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="text-primary font-bold text-xl mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}