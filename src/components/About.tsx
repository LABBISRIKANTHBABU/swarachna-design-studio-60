import React from 'react';
const About: React.FC = () => {
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
              At Swarachna, we believe that great designs come from understanding our clients' vision, values, and goals. Our creative process is collaborative and transparent, ensuring that we deliver results that exceed expectations.
            </p>
            <p className="text-gray-700">
              Whether you need a complete brand identity, marketing materials, or custom merchandise, our team is equipped with the skills and expertise to bring your ideas to life with precision and creativity.
            </p>
          </div>

          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
            <ProcessStep number="01" title="Consultation" description="We start by understanding your needs and objectives." />
            <ProcessStep number="02" title="Concept & Design" description="Our designers create concepts based on your requirements." />
            <ProcessStep number="03" title="Refinement" description="We refine designs based on your feedback until perfect." />
            <ProcessStep number="04" title="Production" description="Final designs are prepared for printing with quality checks." />
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
const ProcessStep = ({
  number,
  title,
  description
}: {
  number: string;
  title: string;
  description: string;
}) => <div className="bg-swarachna-cream/50 p-6 rounded-lg border-l-4 border-swarachna-gold hover:bg-swarachna-cream/80 transition-all duration-300">
    <div className="text-sm font-bold text-swarachna-gold mb-1">STEP {number}</div>
    <h4 className="text-lg font-semibold text-swarachna-burgundy mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </div>;
export default About;