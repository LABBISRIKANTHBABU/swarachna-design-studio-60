
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
            alt="Swarachna Logo" 
            className="h-10 w-auto mr-2"
          />
          <span className={`text-xl font-bold text-swarachna-purple font-playfair`}>
            Swarachna
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home" scrolled={scrolled}>Home</NavLink>
          <NavLink href="#about" scrolled={scrolled}>About</NavLink>
          <NavLink href="#services" scrolled={scrolled}>Services</NavLink>
          <NavLink href="#contact" scrolled={scrolled}>Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X size={24} className="text-swarachna-purple" />
          ) : (
            <Menu size={24} className="text-swarachna-purple" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-4 border-t border-swarachna-purple/10 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children, scrolled }: { href: string; children: React.ReactNode; scrolled: boolean }) => (
  <a
    href={href}
    className={`text-sm font-medium relative transition-all duration-300
      ${scrolled ? 'text-swarachna-brown' : 'text-swarachna-purple'} 
      hover:text-swarachna-darkPurple
      after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
      after:bottom-0 after:left-0 after:bg-swarachna-purple after:origin-bottom-right 
      after:transition-transform after:duration-300 hover:after:scale-x-100 
      hover:after:origin-bottom-left`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-swarachna-brown text-lg font-medium py-2 border-b border-swarachna-purple/10 hover:text-swarachna-purple transition-colors duration-300"
  >
    {children}
  </a>
);

export default Navbar;
