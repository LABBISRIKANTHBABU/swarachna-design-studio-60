
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const serviceData = {
  'logo-design': {
    title: 'Logo & Brand Design',
    description: 'Create a memorable visual identity with our professional logo design and complete branding elements. We work closely with you to understand your brand values and target audience to create a logo that stands out and represents your business perfectly.',
    images: [
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
    ],
    features: [
      'Unique and memorable logo design',
      'Complete brand identity package',
      'Multiple logo variations',
      'Brand guidelines document',
      'Social media profile setup',
      'Unlimited revisions until satisfaction',
    ]
  },
  'marketing-materials': {
    title: 'Marketing Materials',
    description: 'Engage your audience with eye-catching posters, flyers, and social media graphics designed to drive results. Our marketing materials are designed to capture attention and convert viewers into customers.',
    images: [
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
    ],
    features: [
      'Poster and flyer design',
      'Social media graphics',
      'Billboard and banner design',
      'Email marketing templates',
      'Digital ad designs',
      'Print-ready files for all marketing materials',
    ]
  },
  'packaging-labels': {
    title: 'Packaging & Labels',
    description: 'Stand out on the shelf with custom packaging solutions and product labels designed for impact. Our packaging designs are not only visually appealing but also functional and aligned with your brand identity.',
    images: [
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
    ],
    features: [
      'Custom box design',
      'Product label design',
      'Packaging mockups',
      'Eco-friendly packaging solutions',
      'Barcode and QR code integration',
      'FDA-compliant food packaging',
    ]
  },
  'apparel-printing': {
    title: 'Apparel Printing',
    description: 'Custom printed t-shirts, hoodies, caps, and more for events, promotions, or personal use. We use high-quality printing techniques to ensure vibrant colors and long-lasting designs on all apparel items.',
    images: [
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
    ],
    features: [
      'T-shirt and hoodie printing',
      'Cap and hat customization',
      'Corporate uniform design',
      'Event merchandise',
      'Multiple printing techniques available',
      'Bulk order discounts',
    ]
  },
  'event-display': {
    title: 'Event & Display',
    description: 'Make an impact at events with professionally designed standees, banners, and display materials. Our event display materials are designed to draw attention and effectively communicate your message.',
    images: [
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
    ],
    features: [
      'Roll-up standees',
      'Flex banners design and printing',
      'Exhibition booth graphics',
      'Backdrop designs',
      'Directional signage',
      'Pop-up displays',
    ]
  },
  'corporate-stationery': {
    title: 'Corporate Stationery',
    description: 'Create a professional impression with custom business cards, letterheads, and complete corporate stationery. Your stationery is often the first physical touch point with clients, and we ensure it makes a lasting impression.',
    images: [
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
      "/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png",
      "/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png",
    ],
    features: [
      'Business card design and printing',
      'Letterhead and envelope design',
      'Folder and notebook customization',
      'Memo pads and sticky notes',
      'Company profile design',
      'Full stationery kit packages',
    ]
  }
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId && serviceData[serviceId as keyof typeof serviceData];
  
  if (!service) {
    return <div className="min-h-screen pt-20 flex items-center justify-center">Service not found</div>;
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <Link to="/gallery" className="inline-flex items-center mb-6 text-swarachna-burgundy hover:text-swarachna-gold transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            Back to Gallery
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            <span className="gold-text">{service.title}</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <div>
              <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
              
              <div className="bg-swarachna-cream/30 p-6 rounded-lg border border-swarachna-gold/20 mb-6">
                <h3 className="text-xl font-bold text-swarachna-burgundy mb-4 font-playfair">Services Features</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-swarachna-gold mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/upload-design">
                  <Button 
                    className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-6 px-8 rounded-lg text-lg font-medium flex items-center gap-2 transition-all"
                  >
                    <Upload size={18} />
                    Upload Your Design
                  </Button>
                </Link>
                <Button 
                  variant="outline"
                  className="bg-transparent border-2 border-swarachna-gold text-swarachna-burgundy py-6 px-8 rounded-lg text-lg font-medium hover:bg-swarachna-gold/10 transition-all"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      window.scrollTo({
                        top: contactSection.offsetTop,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {service.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`overflow-hidden rounded-lg shadow-lg ${index === 0 ? 'col-span-2' : ''}`}
                >
                  <img 
                    src={image} 
                    alt={`${service.title} - Image ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-swarachna-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-swarachna-burgundy opacity-5 rounded-full blur-3xl"></div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
