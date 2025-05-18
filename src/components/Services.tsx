
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
            <span style={{
            textShadow: '0 1px 1px rgba(0,0,0,0.05)',
            WebkitTextStroke: '1px rgba(184, 134, 11, 0.8)'
          }} className="gold-text font-extrabold">Our Services</span>
          </h2>
          <div className="w-24 h-1 bg-swarachna-burgundy mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive design and printing solutions for all your creative needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Logo & Brand Design" description="Create a memorable visual identity with our professional logo design and complete branding elements." image="/lovable-uploads/b796bec5-9e83-4ca6-85a7-90fbec2b6fd3.png" serviceId="logo-design" />
          <ServiceCard title="Marketing Materials" description="Engage your audience with eye-catching posters, flyers, and social media graphics designed to drive results." image="/lovable-uploads/009d3efb-78c6-4820-a440-2124fc23f847.png" serviceId="marketing-materials" />
          <ServiceCard title="Packaging & Labels" description="Stand out on the shelf with custom packaging solutions and product labels designed for impact." image="/lovable-uploads/9536d388-8daf-4c73-8e77-46f0c411a5f4.png" serviceId="packaging-labels" />
          <ServiceCard title="Apparel Printing" description="Custom printed t-shirts, hoodies, caps, and more for events, promotions, or personal use." image="/lovable-uploads/cd54f1af-b065-43fa-8a3c-be71d282e7c5.png" serviceId="apparel-printing" />
          <ServiceCard title="Event & Display" description="Make an impact at events with professionally designed standees, banners, and display materials." image="/lovable-uploads/07ba2fba-9c2c-43cb-b994-f268ed511b82.png" serviceId="event-display" />
          <ServiceCard title="Corporate Stationery" description="Create a professional impression with custom business cards, letterheads, and complete corporate stationery." image="/lovable-uploads/f3ce48ca-6d74-4d19-8d5d-0f0e76ab7078.png" serviceId="corporate-stationery" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-40 h-40 bg-swarachna-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-swarachna-burgundy opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
};

const ServiceCard = ({
  title,
  description,
  image,
  serviceId
}: {
  title: string;
  description: string;
  image: string;
  serviceId: string;
}) => (
  <div className="service-card group relative bg-white/80 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <div className="aspect-video w-full overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-swarachna-burgundy mb-3 font-playfair">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={`/service/${serviceId}`} onClick={() => window.scrollTo(0, 0)} className="inline-block">
        <Button variant="outline" className="bg-transparent border-2 border-swarachna-gold text-swarachna-burgundy px-4 py-2 rounded-lg text-sm font-medium hover:bg-swarachna-gold/10 transition-all flex items-center gap-2">
          <Eye size={16} />
          Explore
        </Button>
      </Link>
    </div>
  </div>
);

export default Services;
