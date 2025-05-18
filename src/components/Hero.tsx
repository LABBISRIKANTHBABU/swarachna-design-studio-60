
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltedCard from './TiltedCard';
import RotatingText from './RotatingText';
import Waves from './Waves';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center mandala-bg pt-20 overflow-hidden">
      <Waves lineColor="rgba(160, 128, 192, 0.3)" backgroundColor="rgba(245, 240, 235, 0.05)" waveSpeedX={0.015} waveSpeedY={0.01} />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-swarachna-lightbg/30 via-swarachna-lightbg/50 to-swarachna-lightbg/90"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 animate-fade-in-right">
            <div className="relative mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-2">
                <span style={{
                textShadow: '0 1px 1px rgba(0,0,0,0.05)',
                WebkitTextStroke: '1px rgba(184, 134, 11, 0.8)'
              }} className="gold-text font-extrabold">Swarachna</span>
              </h1>
              
              {/* Rotating text animation */}
              <div className="mb-4 flex h-12 md:h-16 lg:h-20 items-center">
                <RotatingText texts={['Creative Design', 'Printing Solutions', 'Professional Services', 'Quality Products']} mainClassName="text-2xl md:text-3xl lg:text-4xl text-swarachna-burgundy font-playfair overflow-hidden font-bold" staggerFrom="last" initial={{
                y: "100%"
              }} animate={{
                y: 0
              }} exit={{
                y: "-120%"
              }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{
                type: "spring",
                damping: 30,
                stiffness: 400
              }} rotationInterval={3000} />
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
            <div className="relative">
              <img 
                src="/lovable-uploads/e2c06efd-c02a-4669-b431-bfdc5fac08b5.png" 
                alt="Swarachna Logo" 
                className="w-72 h-72 md:w-96 md:h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a href="#about" className="text-swarachna-burgundy">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
