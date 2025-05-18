
import React from 'react';
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-swarachna-cream/30 relative overflow-hidden mandala-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
            <span className="gold-text">Our Services</span>
          </h2>
          <div className="w-24 h-1 bg-swarachna-burgundy mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive design and printing solutions for all your creative needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Logo & Brand Design"
            description="Create a memorable visual identity with our professional logo design and complete branding elements."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19.5 10c0 5.25-7.5 9.5-7.5 9.5s-7.5-4.25-7.5-9.5a7.5 7.5 0 0 1 15 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            }
            serviceId="logo-design"
          />
          <ServiceCard
            title="Marketing Materials"
            description="Engage your audience with eye-catching posters, flyers, and social media graphics designed to drive results."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M9.5 9v6.5H11"></path>
                <path d="M15 15.5h-3.5V12"></path>
                <path d="M12.5 9h2.5"></path>
              </svg>
            }
            serviceId="marketing-materials"
          />
          <ServiceCard
            title="Packaging & Labels"
            description="Stand out on the shelf with custom packaging solutions and product labels designed for impact."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m7.5 4.27 9 5.15"></path>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                <path d="m3.3 7 8.7 5 8.7-5"></path>
                <path d="M12 22V12"></path>
              </svg>
            }
            serviceId="packaging-labels"
          />
          <ServiceCard
            title="Apparel Printing"
            description="Custom printed t-shirts, hoodies, caps, and more for events, promotions, or personal use."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
              </svg>
            }
            serviceId="apparel-printing"
          />
          <ServiceCard
            title="Event & Display"
            description="Make an impact at events with professionally designed standees, banners, and display materials."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
              </svg>
            }
            serviceId="event-display"
          />
          <ServiceCard
            title="Corporate Stationery"
            description="Create a professional impression with custom business cards, letterheads, and complete corporate stationery."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M3 15h18"></path>
              </svg>
            }
            serviceId="corporate-stationery"
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-swarachna-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-swarachna-burgundy opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, serviceId }: { title: string; description: string; icon: React.ReactNode; serviceId: string }) => (
  <div className="service-card group">
    <div className="p-4 mb-4 bg-swarachna-gold/10 rounded-full w-16 h-16 flex items-center justify-center text-swarachna-burgundy group-hover:bg-swarachna-gold/20 transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-swarachna-burgundy mb-3 font-playfair">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link to={`/service/${serviceId}`}>
      <Button 
        variant="outline"
        className="bg-transparent border-2 border-swarachna-gold text-swarachna-burgundy px-4 py-2 rounded-lg text-sm font-medium hover:bg-swarachna-gold/10 transition-all flex items-center gap-2"
      >
        <Eye size={16} />
        Explore
      </Button>
    </Link>
  </div>
);

export default Services;
