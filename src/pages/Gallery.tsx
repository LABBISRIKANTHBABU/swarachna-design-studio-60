
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterGallery(category);
  };
  
  return (
    <div className="min-h-screen">
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
              <Button 
                className={activeCategory === 'all' ? 
                  "bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white" : 
                  "bg-transparent border border-swarachna-gold text-swarachna-burgundy hover:bg-swarachna-gold/10"
                } 
                onClick={() => handleCategoryChange('all')}
              >
                All Works
              </Button>
              <Button 
                className={activeCategory === 'logo' ? 
                  "bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white" : 
                  "bg-transparent border border-swarachna-gold text-swarachna-burgundy hover:bg-swarachna-gold/10"
                } 
                onClick={() => handleCategoryChange('logo')}
              >
                Logo Design
              </Button>
              <Button 
                className={activeCategory === 'marketing' ? 
                  "bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white" : 
                  "bg-transparent border border-swarachna-gold text-swarachna-burgundy hover:bg-swarachna-gold/10"
                } 
                onClick={() => handleCategoryChange('marketing')}
              >
                Marketing
              </Button>
              <Button 
                className={activeCategory === 'packaging' ? 
                  "bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white" : 
                  "bg-transparent border border-swarachna-gold text-swarachna-burgundy hover:bg-swarachna-gold/10"
                } 
                onClick={() => handleCategoryChange('packaging')}
              >
                Packaging
              </Button>
              <Button 
                className={activeCategory === 'apparel' ? 
                  "bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white" : 
                  "bg-transparent border border-swarachna-gold text-swarachna-burgundy hover:bg-swarachna-gold/10"
                } 
                onClick={() => handleCategoryChange('apparel')}
              >
                Apparel
              </Button>
              <Button 
                className={activeCategory === 'events' ? 
                  "bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white" : 
                  "bg-transparent border border-swarachna-gold text-swarachna-burgundy hover:bg-swarachna-gold/10"
                } 
                onClick={() => handleCategoryChange('events')}
              >
                Events
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <GalleryItem 
              id="logo-design-1"
              image="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" 
              title="Logo Design" 
              category="logo"
              serviceId="logo-design"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Logo Design has been added to your cart" })}
            />
            <GalleryItem 
              id="brand-identity-1"
              image="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              title="Brand Identity" 
              category="logo"
              serviceId="logo-design"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Brand Identity has been added to your cart" })}
            />
            <GalleryItem 
              id="flyer-design-1"
              image="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" 
              title="Flyer Design" 
              category="marketing"
              serviceId="marketing-materials"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Flyer Design has been added to your cart" })}
            />
            <GalleryItem 
              id="poster-design-1"
              image="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              title="Poster Design" 
              category="marketing"
              serviceId="marketing-materials"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Poster Design has been added to your cart" })}
            />
            <GalleryItem 
              id="packaging-design-1"
              image="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" 
              title="Packaging Design" 
              category="packaging"
              serviceId="packaging-labels"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Packaging Design has been added to your cart" })}
            />
            <GalleryItem 
              id="tshirt-print-1"
              image="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              title="T-Shirt Print" 
              category="apparel"
              serviceId="apparel-printing"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "T-Shirt Print has been added to your cart" })}
            />
            <GalleryItem 
              id="event-banner-1"
              image="/lovable-uploads/78609923-bf93-46f3-8741-7805bc6fe28b.png" 
              title="Event Banner" 
              category="events"
              serviceId="event-display"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Event Banner has been added to your cart" })}
            />
            <GalleryItem 
              id="business-card-1"
              image="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
              title="Business Card" 
              category="stationery"
              serviceId="corporate-stationery"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Business Card has been added to your cart" })}
            />
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-swarachna-gold opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-swarachna-burgundy opacity-5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
};

interface GalleryItemProps {
  id: string;
  image: string;
  title: string;
  category: string;
  serviceId: string;
  addToCart: (item: {id: string; title: string; image: string; serviceId: string}) => void;
  showToast: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ id, image, title, category, serviceId, addToCart, showToast }) => {
  const handleAddToCart = () => {
    addToCart({ id, title, image, serviceId });
    showToast();
  };
  
  return (
    <div className="gallery-item" data-category={category}>
      <div className="overflow-hidden rounded-lg shadow-lg bg-white/80 backdrop-blur-sm group relative">
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
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-swarachna-gold hover:text-swarachna-burgundy p-1 h-auto flex items-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                Add to Cart
              </Button>
              <Link to={`/service/${serviceId}`}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-swarachna-gold hover:text-swarachna-burgundy p-1 h-auto"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
            </div>
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
