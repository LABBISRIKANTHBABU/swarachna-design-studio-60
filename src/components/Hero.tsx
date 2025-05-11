
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltedCard from './TiltedCard';
import ScrollVelocity from './ScrollVelocity';

const Hero: React.FC = () => {
  // State for velocity value - can be adjusted as needed
  const [velocity] = useState(40);

  return <section id="home" className="relative min-h-screen flex items-center mandala-bg pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-swarachna-lightbg/90 via-swarachna-lightbg/95 to-swarachna-lightbg"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 animate-fade-in-right">
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-2">
                <span className="gold-text">Swarachna</span>
              </h1>
              
              {/* Scrolling text animation */}
              <div className="mb-4 overflow-hidden">
                <ScrollVelocity
                  texts={['Creative Design', 'Printing Solutions']} 
                  velocity={velocity} 
                  className="custom-scroll-text"
                  numCopies={4}
                />
              </div>
              
              <p className="text-gray-700 text-lg max-w-lg mb-8">
                Your partner for innovative design and high-quality printing services. Transform your ideas into stunning visual experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all transform hover:translate-y-[-2px]" onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}>
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Button>
                <Link to="/gallery">
                  <Button variant="outline" className="bg-transparent border-2 border-swarachna-gold text-swarachna-burgundy py-6 px-8 rounded-lg text-lg font-medium hover:bg-swarachna-gold/10 transition-all">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center animate-fade-in-left">
            <TiltedCard 
              imageSrc="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              altText="Swarachna Logo" 
              captionText="Swarachna Creative Solutions" 
              containerHeight="400px" 
              containerWidth="400px" 
              imageHeight="400px" 
              imageWidth="400px" 
              rotateAmplitude={10} 
              scaleOnHover={1.15} 
              showMobileWarning={false} 
              showTooltip={true} 
              displayOverlayContent={true} 
              overlayContent={
                <div className="flex flex-col items-center justify-center p-4 rounded-lg text-white w-3/4 h-3/4 bg-[#000a0e]/0">
                  <h3 className="text-xl font-playfair gold-text"></h3>
                  <p className="text-sm text-center mt-2"></p>
                </div>
              } 
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-swarachna-burgundy">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>;
};

export default Hero;
