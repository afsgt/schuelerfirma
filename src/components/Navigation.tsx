
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { title: "Über uns", href: "/ueber-uns" },
    { title: "Geschichte", href: "/geschichte" },
    { title: "Unsere Produkte", href: "/shop" },
    { title: "Gallerie", href: "/gallery" },
    { title: "Neuigkeiten", href: "/news" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Alles für Schule Logo"
              className="h-14 w-14 md:h-20 md:w-20"
            />
            <span className="text-lg md:text-xl font-bold text-primary">
              Alles für Schule
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => {
              if (item.title === "Gallerie") {
                return (
                  <div
                    key={item.title}
                    onMouseEnter={() => setGalleryOpen(true)}
                    onMouseLeave={() => setGalleryOpen(false)}
                  >
                    <DropdownMenu open={galleryOpen}>
                      <DropdownMenuTrigger className="text-sm text-foreground hover:text-primary transition-colors font-medium relative group flex items-center gap-1">
                        {item.title}
                        <ChevronDown className="h-4 w-4" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => navigate('/gallery')}>
                          AnneFranktastisch Gallerie
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              }
              return (
                <Link
                  key={item.title}
                  to={item.href}
                  className="text-sm text-foreground hover:text-primary transition-colors font-medium relative group"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                </Link>
              );
            })}
            <Button variant="default" className="px-3 py-1 text-sm" onClick={() => navigate('/kontakt')}>
              Kontakt
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-foreground hover:text-primary hover:bg-muted px-4 rounded-lg transition-colors font-medium"
              >
                {item.title}
              </Link>
            ))}
            <div className="px-4 pt-3">
              <Button variant="default" className="w-full px-3 py-1 text-sm" onClick={() => navigate('/kontakt')}>
                Kontakt
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
