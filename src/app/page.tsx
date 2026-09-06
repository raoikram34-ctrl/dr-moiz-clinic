import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import About from "@/components/home/about";
import Expertise from "@/components/home/expertise";
import Consultant from "@/components/home/consultant";
import WhyChooseUs from "@/components/home/why-choose-us";
import Testimonials from "@/components/home/testimonials";
import Gallery from "@/components/home/gallery"; // New Import
import CTA from "@/components/home/cta"; 

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Expertise />
      <Consultant />      
      <Gallery />
      <WhyChooseUs />
      <Testimonials />      
      <CTA />
    </>
  );
}