import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TiltedCard from './TiltedCard';
import RotatingText from './RotatingText';
import Waves from './Waves';
const Hero: React.FC = () => {
  return <section id="home" className="relative min-h-screen flex items-center mandala-bg pt-20 overflow-hidden">
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
                WebkitTextStroke: '0.5px rgba(184, 134, 11, 0.5)'
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
            <TiltedCard imageSrc="/lovable-uploads/b162c337-d7b6-4610-b841-e91c66358a60.png" altText="Swarachna Pillow" captionText="Swarachna Creative Solutions" containerHeight="400px" containerWidth="400px" imageHeight="400px" imageWidth="400px" rotateAmplitude={10} scaleOnHover={1.15} showMobileWarning={false} showTooltip={true} displayOverlayContent={true} overlayContent={<div className="flex flex-col items-center justify-center p-4 rounded-lg text-white w-3/4 h-3/4 bg-[#000a0e]/0">
                  <h3 className="text-xl font-playfair gold-text"></h3>
                  <p className="text-sm text-center mt-2"></p>
                </div>} />
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