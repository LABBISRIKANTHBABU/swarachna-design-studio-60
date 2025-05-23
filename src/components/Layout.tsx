
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Waves from '@/components/Waves';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Reset scroll position when route changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Slight delay to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen relative">
          {/* Full-page waves background */}
          <Waves
            lineColor="rgba(188, 108, 17, 0.3)"
            backgroundColor="rgba(156, 132, 77, 0.22)"
            waveSpeedX={0.015}
            waveSpeedY={0.008}
            waveAmpX={30}
            waveAmpY={15}
            friction={0.92}
            tension={0.008} 
            maxCursorMove={100}
            xGap={15}
            yGap={40}
          />
          
          <Navbar />
          
          <div className="relative z-10">
            {children}
          </div>
          
          <Footer />
          
          {/* WhatsApp floating button */}
          <a 
            href="https://wa.me/917982111082" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp_float"
          >
            <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
          </a>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default Layout;
