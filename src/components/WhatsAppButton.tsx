
import React from 'react';
import { WhatsApp } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Hello, I'm interested in your design services!", 
  className, 
  variant = "default" 
}) => {
  const handleWhatsAppClick = () => {
    // Format phone number - remove any non-digit characters
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    
    // Create WhatsApp URL with encoded message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 ${className}`}
      variant={variant}
    >
      <WhatsApp size={18} />
      <span>Contact on WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
