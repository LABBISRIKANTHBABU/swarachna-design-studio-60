
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Waves from '@/components/Waves';
import { AuthProvider } from '@/contexts/AuthContext';
import { CartProvider } from '@/contexts/CartContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen relative">
          {/* Full-page waves background */}
          <Waves
            lineColor="rgba(160, 128, 192, 0.2)"
            backgroundColor="rgba(245, 240, 235, 0.2)"
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
            href="https://wa.me/919876543210" 
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
