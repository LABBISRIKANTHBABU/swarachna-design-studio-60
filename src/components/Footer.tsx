
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-swarachna-burgundy text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
                alt="Swarachna Logo" 
                className="h-12 w-auto mr-3"
              />
              <span className="text-2xl font-bold text-white font-playfair">
                Swarachna
              </span>
            </div>
            <p className="text-swarachna-cream/80 text-sm">
              Transforming ideas into visual experiences through creative design and premium printing solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://facebook.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://instagram.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://twitter.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://linkedin.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </SocialIcon>
              <SocialIcon href="https://wa.me/917982111082">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </SocialIcon>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-playfair">About Our Services</h4>
            <p className="text-swarachna-cream/80 text-sm mb-4">
              We offer comprehensive design and printing services tailored to your unique needs. From brand identity creation to high-quality print production, our team delivers excellence with every project.
            </p>
            <p className="text-swarachna-cream/80 text-sm">
              Our mission is to transform your creative vision into stunning visual experiences that captivate and inspire.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-playfair">Newsletter</h4>
            <p className="text-swarachna-cream/80 text-sm mb-4">
              Subscribe to receive updates on our latest work, offers and design tips.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <input 
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 text-white px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:ring-1 focus:ring-swarachna-gold"
                />
                <button
                  type="submit"
                  className="bg-swarachna-gold text-swarachna-burgundy px-4 py-2 rounded-r-lg font-medium hover:bg-swarachna-gold/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-swarachna-cream/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Swarachna. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FooterBottomLink>Privacy Policy</FooterBottomLink>
            <FooterBottomLink>Terms of Service</FooterBottomLink>
            <FooterBottomLink>Sitemap</FooterBottomLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ children, href }: { children: React.ReactNode, href?: string }) => (
  <a 
    href={href || "#"} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-swarachna-gold hover:text-swarachna-burgundy transition-colors"
  >
    {children}
  </a>
);

const FooterBottomLink = ({ children }: { children: React.ReactNode }) => (
  <a 
    href="#" 
    className="text-swarachna-cream/60 text-sm hover:text-swarachna-gold transition-colors"
  >
    {children}
  </a>
);

export default Footer;
