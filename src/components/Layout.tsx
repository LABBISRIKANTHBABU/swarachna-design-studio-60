
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Waves from '@/components/Waves';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
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
    </div>
  );
};

export default Layout;
