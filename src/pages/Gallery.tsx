
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-20 bg-swarachna-cream/30 relative overflow-hidden mandala-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
              <span className="gold-text">Our Gallery</span>
            </h1>
            <div className="w-24 h-1 bg-swarachna-burgundy mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of creative designs and printing projects
            </p>
          </div>
          
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button className="bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white" onClick={() => filterGallery('all')}>
                All Works
              </Button>
              <Button variant="outline" className="border-swarachna-gold text-swarachna-burgundy" onClick={() => filterGallery('logo')}>
                Logo Design
              </Button>
              <Button variant="outline" className="border-swarachna-gold text-swarachna-burgundy" onClick={() => filterGallery('marketing')}>
                Marketing
              </Button>
              <Button variant="outline" className="border-swarachna-gold text-swarachna-burgundy" onClick={() => filterGallery('packaging')}>
                Packaging
              </Button>
              <Button variant="outline" className="border-swarachna-gold text-swarachna-burgundy" onClick={() => filterGallery('apparel')}>
                Apparel
              </Button>
              <Button variant="outline" className="border-swarachna-gold text-swarachna-burgundy" onClick={() => filterGallery('events')}>
                Events
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <GalleryItem 
              image="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" 
              title="Logo Design" 
              category="logo"
              serviceId="logo-design"
            />
            <GalleryItem 
              image="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              title="Brand Identity" 
              category="logo"
              serviceId="logo-design"
            />
            <GalleryItem 
              image="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" 
              title="Flyer Design" 
              category="marketing"
              serviceId="marketing-materials"
            />
            <GalleryItem 
              image="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              title="Poster Design" 
              category="marketing"
              serviceId="marketing-materials"
            />
            <GalleryItem 
              image="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" 
              title="Packaging Design" 
              category="packaging"
              serviceId="packaging-labels"
            />
            <GalleryItem 
              image="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              title="T-Shirt Print" 
              category="apparel"
              serviceId="apparel-printing"
            />
            <GalleryItem 
              image="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" 
              title="Event Banner" 
              category="events"
              serviceId="event-display"
            />
            <GalleryItem 
              image="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              title="Business Card" 
              category="stationery"
              serviceId="corporate-stationery"
            />
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

const GalleryItem = ({ image, title, category, serviceId }: { image: string; title: string; category: string; serviceId: string }) => {
  return (
    <div className="gallery-item" data-category={category}>
      <div className="overflow-hidden rounded-lg shadow-lg bg-white group relative">
        <div className="aspect-square overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-swarachna-burgundy">{title}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-500 capitalize">{category}</span>
            <Link to={`/service/${serviceId}`}>
              <Button 
                variant="link" 
                className="text-swarachna-gold hover:text-swarachna-burgundy p-0 h-auto"
              >
                Select This Design
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function filterGallery(category: string) {
  const items = document.querySelectorAll('.gallery-item');
  
  items.forEach(item => {
    if (category === 'all' || item.getAttribute('data-category') === category) {
      (item as HTMLElement).style.display = 'block';
    } else {
      (item as HTMLElement).style.display = 'none';
    }
  });
}

export default Gallery;
