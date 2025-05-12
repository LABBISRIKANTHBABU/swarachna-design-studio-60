
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, LogIn, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  
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

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-swarachna-lightbg/90 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/5fe025e4-9504-4b7a-83d9-8a196fb7c6f4.png" 
            alt="Swarachna Logo" 
            className={`transition-all duration-300 ${scrolled ? 'h-12 w-auto' : 'h-16 w-auto'} mr-2`}
          />
          <span className={`text-xl font-bold ${scrolled ? 'text-swarachna-burgundy' : 'text-swarachna-burgundy'} font-playfair`}>
            Swarachna
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            <NavLink href="#home" scrolled={scrolled}>Home</NavLink>
            <NavLink href="#about" scrolled={scrolled}>About</NavLink>
            <NavLink href="#services" scrolled={scrolled}>Services</NavLink>
            <NavLink href="#contact" scrolled={scrolled}>Contact</NavLink>
            <Link to="/gallery" className={`text-sm font-medium relative transition-all duration-300
              ${scrolled ? 'text-swarachna-burgundy' : 'text-swarachna-burgundy'} 
              hover:text-swarachna-gold`}>
              Gallery
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-swarachna-burgundy text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
            
            {isAuthenticated ? (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleLogout}
                title="Logout"
              >
                <LogOut className="h-5 w-5" />
              </Button>
            ) : (
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  size="icon"
                  title="Login"
                >
                  <LogIn className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <Link to="/cart" className="relative mr-2">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-swarachna-burgundy text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={24} className="text-swarachna-burgundy" />
            ) : (
              <Menu size={24} className="text-swarachna-burgundy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-4 border-t border-swarachna-gold/10 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            <Link 
              to="/gallery" 
              className="text-swarachna-burgundy text-lg font-medium py-2 border-b border-swarachna-gold/10 hover:text-swarachna-gold transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            
            {isAuthenticated ? (
              <>
                <div className="py-2 text-swarachna-burgundy flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>{user?.name || user?.email}</span>
                </div>
                <button
                  className="text-swarachna-burgundy text-lg font-medium py-2 border-b border-swarachna-gold/10 hover:text-swarachna-gold transition-colors duration-300 flex items-center"
                  onClick={handleLogout}
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="text-swarachna-burgundy text-lg font-medium py-2 border-b border-swarachna-gold/10 hover:text-swarachna-gold transition-colors duration-300 flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-5 w-5 mr-2" />
                Login
              </Link>
            )}
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
      ${scrolled ? 'text-swarachna-burgundy' : 'text-swarachna-burgundy'} 
      hover:text-swarachna-gold
      after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
      after:bottom-0 after:left-0 after:bg-swarachna-gold after:origin-bottom-right 
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
    className="text-swarachna-burgundy text-lg font-medium py-2 border-b border-swarachna-gold/10 hover:text-swarachna-gold transition-colors duration-300"
  >
    {children}
  </a>
);

export default Navbar;
