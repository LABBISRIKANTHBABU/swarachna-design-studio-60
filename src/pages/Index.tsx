
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
              <span className="gold-text">Our Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-swarachna-burgundy mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our latest work and see how we bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/lovable-uploads/e822bcbe-75d8-4924-a68d-9db1edaf8528.png" 
                  alt="Gallery preview - Art Print"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/lovable-uploads/90bbad9e-0e7d-413a-b18e-9e404d65bec6.png" 
                  alt="Gallery preview - Notebook"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg bg-white hidden sm:block">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/lovable-uploads/42a360b5-3dc5-4143-ae2b-9c781838ac99.png" 
                  alt="Gallery preview - Tote bag"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg bg-white hidden lg:block">
              <div className="aspect-square overflow-hidden">
                <img 
                  src="/lovable-uploads/c0c37fce-5a5d-4137-84e5-e3e55c6862b2.png" 
                  alt="Gallery preview - T-shirt"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/gallery">
              <Button 
                className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all transform hover:translate-y-[-2px] mx-auto"
              >
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
                <span className="gold-text">Have Your Own Design?</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Upload your own design and we'll bring it to life. Whether you have a sketch, a digital file, or just an idea, our team will work with you to create the perfect print.
              </p>
              <Link to="/upload-design">
                <Button 
                  className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all transform hover:translate-y-[-2px]"
                >
                  <Image size={18} />
                  Upload Your Design
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                <img
                  src="/lovable-uploads/e57e5172-b6db-4f46-acdb-ad0d8dcace7c.png"
                  alt="Custom Design - Cushion Cover"
                  className="w-full h-full object-contain z-10 drop-shadow-xl"
                />
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
