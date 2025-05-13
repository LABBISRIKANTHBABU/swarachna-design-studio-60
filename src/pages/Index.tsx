
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Image, Eye } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      
      {/* Gallery Preview Section */}
      <section className="py-16 bg-white/80 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
              <span style={{
                textShadow: '0 1px 1px rgba(0,0,0,0.05)',
                WebkitTextStroke: '1px rgba(184, 134, 11, 0.8)'
              }} className="gold-text font-extrabold">Our Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-swarachna-burgundy mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our latest work and see how we bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="aspect-square overflow-hidden">
                <img src="/lovable-uploads/b796bec5-9e83-4ca6-85a7-90fbec2b6fd3.png" alt="Gallery preview 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm">
              <div className="aspect-square overflow-hidden">
                <img src="/lovable-uploads/009d3efb-78c6-4820-a440-2124fc23f847.png" alt="Gallery preview 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm hidden sm:block">
              <div className="aspect-square overflow-hidden">
                <img src="/lovable-uploads/cd54f1af-b065-43fa-8a3c-be71d282e7c5.png" alt="Gallery preview 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm hidden lg:block">
              <div className="aspect-square overflow-hidden">
                <img src="/lovable-uploads/8e2a3ed1-cadd-4bf0-87e6-63c35866871b.png" alt="Gallery preview 4" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
              <Button className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all transform hover:translate-y-[-2px] mx-auto">
                <Eye size={18} />
                View Full Gallery
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Services />
      
      {/* Design Upload CTA Section */}
      <section className="py-16 bg-swarachna-cream/50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                <span style={{
                  textShadow: '0 1px 1px rgba(0,0,0,0.05)',
                  WebkitTextStroke: '1px rgba(184, 134, 11, 0.8)'
                }} className="gold-text font-extrabold">Have Your Own Design?</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Upload your own design and we'll bring it to life. Whether you have a sketch, a digital file, or just an idea, our team will work with you to create the perfect print.
              </p>
              <Link to="/upload-design" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all transform hover:translate-y-[-2px]">
                  <Image size={18} />
                  Upload Your Design
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                <img src="/lovable-uploads/f3ce48ca-6d74-4d19-8d5d-0f0e76ab7078.png" alt="Custom Design" className="w-full h-full object-contain z-10 drop-shadow-xl" />
                <div className="absolute inset-0 bg-gold-gradient rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
    </div>
  );
};

export default Index;
