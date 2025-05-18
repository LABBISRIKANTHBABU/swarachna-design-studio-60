import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, User, LogIn, LogOut, ChevronDown } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  
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

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // Otherwise navigate to home page with the section hash
    else {
      navigate(`/#${sectionId}`);
    }
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
            src="/lovable-uploads/8d0b7b25-ae0d-4ddc-a1de-09ced7e1eaa8.png" 
            alt="Swarachna Logo" 
            className="h-12 w-auto mr-2"
          />
          <span className={`text-xl font-bold ${scrolled ? 'text-swarachna-burgundy' : 'text-swarachna-burgundy'} font-playfair`}>
            Swarachna
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium relative transition-all duration-300
                ${scrolled ? 'text-swarachna-burgundy' : 'text-swarachna-burgundy'} 
                hover:text-swarachna-gold
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-swarachna-gold after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium relative transition-all duration-300
                ${scrolled ? 'text-swarachna-burgundy' : 'text-swarachna-burgundy'} 
                hover:text-swarachna-gold
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-swarachna-gold after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`text-sm font-medium relative transition-all duration-300
                ${scrolled ? 'text-swarachna-burgundy' : 'text-swarachna-burgundy'} 
                hover:text-swarachna-gold
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-swarachna-gold after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium relative transition-all duration-300
                ${scrolled ? 'text-swarachna-burgundy' : 'text-swarachna-burgundy'} 
                hover:text-swarachna-gold
                after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-swarachna-gold after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 
                hover:after:origin-bottom-left`}
            >
              Contact
            </button>
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="rounded-full bg-swarachna-burgundy/10 text-swarachna-burgundy"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{user?.name || user?.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600 flex items-center gap-2">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-2 text-swarachna-burgundy hover:text-swarachna-gold"
                >
                  <User className="h-5 w-5" />
                  Login
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
            <button 
              onClick={() => scrollToSection('home')}
              className="text-swarachna-burgundy text-lg font-medium py-2 border-b border-swarachna-gold/10 hover:text-swarachna-gold transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-swarachna-burgundy text-lg font-medium py-2 border-b border-swarachna-gold/10 hover:text-swarachna-gold transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-swarachna-burgundy text-lg font-medium py-2 border-b border-swarachna-gold/10 hover:text-swarachna-gold transition-colors duration-300"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-swarachna-burgundy text-lg font-medium py-2 border-b border-swarachna-gold/10 hover:text-swarachna-gold transition-colors duration-300"
            >
              Contact
            </button>
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
                <User className="h-5 w-5 mr-2" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
