import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from 'lucide-react';
const Contact: React.FC = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Display success message
    toast({
      title: "Message sent!",
      description: "We've received your message and will contact you soon."
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
            <span className="gold-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-swarachna-burgundy mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Reach out to us for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-swarachna-cream/50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-swarachna-burgundy mb-6 font-playfair">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full border-swarachna-gold/20 focus:border-swarachna-gold" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full border-swarachna-gold/20 focus:border-swarachna-gold" required />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="w-full border-swarachna-gold/20 focus:border-swarachna-gold" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." className="w-full border-swarachna-gold/20 focus:border-swarachna-gold" rows={5} required />
              </div>
              
              <Button type="submit" className="w-full bg-swarachna-burgundy hover:bg-swarachna-burgundy/90 text-white py-5 rounded-lg text-lg font-medium transition-all">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-swarachna-burgundy mb-6 font-playfair">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo icon={<Phone size={24} />} title="Phone" content="+91 98765 43210" />
                <ContactInfo icon={<Mail size={24} />} title="Email" content="info@swarachna.com" />
                <ContactInfo icon={<MapPin size={24} />} title="Address" content="123 Design Street, Creative Lane, Mumbai, India - 400001" />
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-swarachna-cream/30 rounded-xl border border-swarachna-gold/10">
              <h4 className="text-xl font-semibold text-swarachna-burgundy mb-4 font-playfair">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-swarachna-gold opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-swarachna-burgundy opacity-5 rounded-full blur-3xl"></div>
    </section>;
};
const ContactInfo = ({
  icon,
  title,
  content
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) => <div className="flex items-start">
    <div className="p-3 bg-swarachna-gold/10 rounded-full mr-4 text-swarachna-burgundy">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-swarachna-burgundy">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>;
export default Contact;