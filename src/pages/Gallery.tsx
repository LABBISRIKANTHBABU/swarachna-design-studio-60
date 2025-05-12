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
              image="/lovable-uploads/6cc1baf6-c8ad-40a8-9607-f04ca6016daa.png" 
              title="Custom Mug Design" 
              category="logo"
              serviceId="logo-design"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Custom Mug Design has been added to your cart" })}
            />
            <GalleryItem 
              id="brand-identity-1"
              image="/lovable-uploads/e822bcbe-75d8-4924-a68d-9db1edaf8528.png" 
              title="Art Print Design" 
              category="marketing"
              serviceId="marketing-materials"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Art Print Design has been added to your cart" })}
            />
            <GalleryItem 
              id="notebook-design-1"
              image="/lovable-uploads/90bbad9e-0e7d-413a-b18e-9e404d65bec6.png" 
              title="Notebook Design" 
              category="stationery"
              serviceId="corporate-stationery"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Notebook Design has been added to your cart" })}
            />
            <GalleryItem 
              id="packaging-design-1"
              image="/lovable-uploads/4df76d8c-5502-4770-a79e-7e7f058ed978.png" 
              title="Shopping Bag Design" 
              category="packaging"
              serviceId="packaging-labels"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Shopping Bag Design has been added to your cart" })}
            />
            <GalleryItem 
              id="wall-art-1"
              image="/lovable-uploads/9f2f057e-15ec-4222-8be1-add25a8718c9.png" 
              title="Wall Art Print" 
              category="marketing"
              serviceId="marketing-materials"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Wall Art Print has been added to your cart" })}
            />
            <GalleryItem 
              id="sticker-design-1"
              image="/lovable-uploads/fceef116-bf60-4186-ae4e-2fa2c9a1de6a.png" 
              title="Laptop Sticker Design" 
              category="marketing"
              serviceId="marketing-materials"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Laptop Sticker Design has been added to your cart" })}
            />
            <GalleryItem 
              id="tote-bag-1"
              image="/lovable-uploads/42a360b5-3dc5-4143-ae2b-9c781838ac99.png" 
              title="Tote Bag Print" 
              category="apparel"
              serviceId="apparel-printing"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Tote Bag Print has been added to your cart" })}
            />
            <GalleryItem 
              id="cushion-cover-1"
              image="/lovable-uploads/e57e5172-b6db-4f46-acdb-ad0d8dcace7c.png" 
              title="Cushion Cover Design" 
              category="apparel"
              serviceId="apparel-printing"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "Cushion Cover Design has been added to your cart" })}
            />
            <GalleryItem 
              id="tshirt-print-1"
              image="/lovable-uploads/c0c37fce-5a5d-4137-84e5-e3e55c6862b2.png" 
              title="T-Shirt Design" 
              category="apparel"
              serviceId="apparel-printing"
              addToCart={addItem}
              showToast={() => toast({ title: "Added to cart", description: "T-Shirt Design has been added to your cart" })}
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
