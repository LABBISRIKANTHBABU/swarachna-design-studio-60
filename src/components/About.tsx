
import React from 'react';
import Stepper from './stepper/Stepper';
import './stepper/Stepper.css';

const About: React.FC = () => {
  const stepContent = [
    <div key="consultation" className="text-center px-4">
      <h3 className="text-xl font-bold mb-3 text-swarachna-burgundy">Consultation</h3>
      <img src="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" alt="Consultation" className="w-full h-32 object-cover rounded-lg mb-3" />
      <p className="text-gray-700">We start by understanding your vision, goals, and requirements through detailed consultations.</p>
    </div>,
    <div key="design" className="text-center px-4">
      <h3 className="text-xl font-bold mb-3 text-swarachna-burgundy">Design</h3>
      <img src="/lovable-uploads/03de423c-f553-4f04-98f4-28305b3392ef.png" alt="Design" className="w-full h-32 object-cover rounded-lg mb-3" />
      <p className="text-gray-700">Our creative team develops initial concepts and designs based on your needs and preferences.</p>
    </div>,
    <div key="refinement" className="text-center px-4">
      <h3 className="text-xl font-bold mb-3 text-swarachna-burgundy">Refinement</h3>
      <img src="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" alt="Refinement" className="w-full h-32 object-cover rounded-lg mb-3" />
      <p className="text-gray-700">We refine the designs based on your feedback until we achieve the perfect result.</p>
    </div>,
    <div key="production" className="text-center px-4">
      <h3 className="text-xl font-bold mb-3 text-swarachna-burgundy">Production</h3>
      <img src="/lovable-uploads/b162c337-d7b6-4610-b841-e91c66358a60.png" alt="Production" className="w-full h-32 object-cover rounded-lg mb-3" />
      <p className="text-gray-700">Once approved, we move to production with meticulous attention to quality and detail.</p>
    </div>,
  ];
  
  return <section id="about" className="py-20 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
            <span className="gold-text">About Swarachna</span>
          </h2>
          <div className="w-24 h-1 bg-swarachna-burgundy mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We blend creativity with technical expertise to deliver exceptional design and printing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard number="01" title="Creative Design" description="From logos to complete brand identities, we craft designs that tell your unique story." />
          <FeatureCard number="02" title="Quality Printing" description="Premium printing services for all your business and personal needs with attention to detail." />
          <FeatureCard number="03" title="Timely Delivery" description="We understand the importance of deadlines and ensure on-time delivery for all projects." />
          <FeatureCard number="04" title="Custom Solutions" description="Tailor-made solutions to meet your specific requirements and exceed expectations." />
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold font-playfair text-swarachna-burgundy mb-6">
              Our Creative Process
            </h3>
            <p className="text-gray-700 mb-6">
              At Swarachna, we believe that great designs come from understanding our clients' vision, values, and goals.
            </p>
          </div>

          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-swarachna-gold/10">
            <Stepper steps={stepContent} />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-swarachna-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-swarachna-burgundy opacity-5 rounded-full blur-3xl"></div>
    </section>;
};

const FeatureCard = ({
  number,
  title,
  description
}: {
  number: string;
  title: string;
  description: string;
}) => <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-swarachna-gold/10 hover:border-swarachna-gold/30 transition-all duration-300 hover:transform hover:translate-y-[-5px] group">
    <div className="text-4xl font-playfair text-swarachna-gold/30 group-hover:text-swarachna-gold/50 transition-colors mb-4">
      {number}
    </div>
    <h3 className="text-xl font-bold text-swarachna-burgundy mb-3 font-playfair">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>;

export default About;
