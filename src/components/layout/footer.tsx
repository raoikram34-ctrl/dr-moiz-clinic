import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Image 
              src="/logo/dr-moiz-logo-06.png" 
              alt="Moiz Dental Clinic Logo" 
              width={140} 
              height={50} 
            />
            <p className="text-card-desc mt-2 max-w-sm">
              Providing premium, painless, and minimal dental care experiences. Your smile is our top priority.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h6 className="text-caption">Quick Links</h6>
            <nav className="flex flex-col gap-3 mt-2">
              <Link href="/expertise" className="text-body hover:text-primary transition-colors">Expertise</Link>
              <Link href="/consultant" className="text-body hover:text-primary transition-colors">Our Consultant</Link>
              <Link href="/about" className="text-body hover:text-primary transition-colors">About Us</Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h6 className="text-caption">Contact Us</h6>
            <div className="flex flex-col gap-3 mt-2">
              <p className="text-body">123 Premium Medical Lane<br/>City Name, Country</p>
              <a href="mailto:hello@moizdental.com" className="text-body hover:text-primary transition-colors">
                hello@moizdental.com
              </a>
              <a href="tel:+1234567890" className="text-primary font-bold hover:text-secondary transition-colors">
                +1 234 567 890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} Moiz Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-foreground/60 hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-foreground/60 hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}