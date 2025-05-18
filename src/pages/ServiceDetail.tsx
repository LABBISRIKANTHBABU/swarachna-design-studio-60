
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

// Define service data interface
interface ServiceData {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  image: string;
  price: string;
}

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<ServiceData | null>(null);
  const { addItem } = useCart();
  const { toast } = useToast();
  
  useEffect(() => {
    // Reset scroll position when component mounts
    window.scrollTo(0, 0);
    
    // Mock data - in a real app, this would be fetched from a database
    const servicesData: Record<string, ServiceData> = {
      'logo-design': {
        id: 'logo-design-service',
        title: 'Logo & Brand Design',
        description: 'Create a memorable visual identity with our professional logo design and complete branding elements that help your business stand out in a crowded marketplace.',
        features: [
          'Multiple concept designs',
          'Unlimited revisions',
          'Color palette selection',
          'Typography guidelines',
          'Brand identity guidelines',
          'File formats for print and digital use'
        ],
        benefits: [
          'Build brand recognition',
          'Professional appearance',
          'Consistent brand identity',
          'Stand out from competitors',
          'Builds customer trust'
        ],
        image: '/lovable-uploads/b796bec5-9e83-4ca6-85a7-90fbec2b6fd3.png',
        price: '₹15,000'
      },
      'marketing-materials': {
        id: 'marketing-materials-service',
        title: 'Marketing Materials',
        description: 'Engage your audience with eye-catching posters, flyers, brochures, and social media graphics designed to drive results for your marketing campaigns.',
        features: [
          'Custom design for your brand',
          'Print and digital formats',
          'Social media graphics package',
          'Billboard and poster designs',
          'Brochure and flyer layouts',
          'Business card designs'
        ],
        benefits: [
          'Consistent marketing message',
          'Professional presentation',
          'Increased brand awareness',
          'Higher conversion rates',
          'Versatility across channels'
        ],
        image: '/lovable-uploads/009d3efb-78c6-4820-a440-2124fc23f847.png',
        price: '₹12,000'
      },
      'packaging-labels': {
        id: 'packaging-labels-service',
        title: 'Packaging & Labels',
        description: 'Stand out on the shelf with custom packaging solutions and product labels designed for maximum impact and brand recognition.',
        features: [
          'Custom packaging design',
          'Product label design',
          'Eco-friendly options',
          'Barcode and technical compliance',
          'Multiple size options',
          'Short run and bulk printing'
        ],
        benefits: [
          'Enhanced shelf presence',
          'Improved unboxing experience',
          'Brand consistency',
          'Product protection',
          'Increased perceived value'
        ],
        image: '/lovable-uploads/9536d388-8daf-4c73-8e77-46f0c411a5f4.png',
        price: '₹18,000'
      },
      'apparel-printing': {
        id: 'apparel-printing-service',
        title: 'Apparel Printing',
        description: 'Custom printed t-shirts, hoodies, caps, and more for events, promotions, team uniforms or personal use with quality fabrics and printing techniques.',
        features: [
          'Various garment options',
          'Screen printing services',
          'DTG (Direct-to-Garment) printing',
          'Embroidery options',
          'Bulk order discounts',
          'Sample production'
        ],
        benefits: [
          'Team unity and identity',
          'Walking advertisements',
          'Corporate branding',
          'Event memorabilia',
          'Custom gifts'
        ],
        image: '/lovable-uploads/cd54f1af-b065-43fa-8a3c-be71d282e7c5.png',
        price: '₹8,000'
      },
      'event-display': {
        id: 'event-display-service',
        title: 'Event & Display',
        description: 'Make an impact at events with professionally designed standees, banners, backdrops and display materials that capture attention.',
        features: [
          'Roll-up banners',
          'Backdrop designs',
          'Trade show displays',
          'Pop-up stands',
          'Table covers and runners',
          'Outdoor signage'
        ],
        benefits: [
          'Professional event presence',
          'Brand visibility',
          'Reusable marketing assets',
          'Event space optimization',
          'Attention-grabbing displays'
        ],
        image: '/lovable-uploads/07ba2fba-9c2c-43cb-b994-f268ed511b82.png',
        price: '₹20,000'
      },
      'corporate-stationery': {
        id: 'corporate-stationery-service',
        title: 'Corporate Stationery',
        description: 'Create a professional impression with custom business cards, letterheads, envelopes, and complete corporate stationery that reflects your brand.',
        features: [
          'Business card design',
          'Letterhead templates',
          'Envelope designs',
          'Notepad and memo designs',
          'Folder and document covers',
          'Digital templates'
        ],
        benefits: [
          'Professional business image',
          'Cohesive brand presentation',
          'Recognition and recall',
          'Client impression management',
          'Internal document organization'
        ],
        image: '/lovable-uploads/f3ce48ca-6d74-4d19-8d5d-0f0e76ab7078.png',
        price: '₹10,000'
      }
    };
    
    if (serviceId && serviceId in servicesData) {
      setService(servicesData[serviceId]);
    }
  }, [serviceId]);
  
  const handleAddToCart = () => {
    if (service) {
      addItem({
        id: service.id,
        title: service.title,
        image: service.image,
        serviceId: serviceId || ''
      });
      
      toast({
        title: "Added to cart",
        description: `${service.title} has been added to your cart`
      });
    }
  };
  
  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-swarachna-burgundy mb-4">Service not found</h2>
        <Link to="/">
          <Button className="bg-swarachna-burgundy text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>;
  }
  
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-swarachna-burgundy hover:text-swarachna-gold mb-8">
          <ArrowLeft size={18} className="mr-2" />
          Back to Services
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              <span style={{
                textShadow: '0 1px 1px rgba(0,0,0,0.05)',
                WebkitTextStroke: '1px rgba(184, 134, 11, 0.8)'
              }} className="gold-text font-extrabold">{service.title}</span>
            </h1>
            <div className="w-16 h-1 bg-swarachna-burgundy mb-6"></div>
            
            <p className="text-gray-700 text-lg mb-6">{service.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-swarachna-burgundy mb-3">Starting at</h3>
              <p className="text-3xl font-bold text-swarachna-gold">{service.price}</p>
            </div>
            
            <Button 
              onClick={handleAddToCart}
              className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-swarachna-burgundy mb-6 font-playfair">Service Features</h2>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-swarachna-gold mr-2">●</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-swarachna-burgundy mb-6 font-playfair">Benefits</h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-swarachna-gold mr-2">●</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-swarachna-burgundy mb-6 font-playfair">Ready to get started?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleAddToCart}
              className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </Button>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <Button 
                variant="outline"
                className="bg-transparent border-2 border-swarachna-gold text-swarachna-burgundy py-6 px-8 rounded-lg text-lg font-medium hover:bg-swarachna-gold/10 transition-all"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
