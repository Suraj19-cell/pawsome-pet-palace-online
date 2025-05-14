
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";
import { Menu, X } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-pet-purple shadow-md py-3" : "bg-pet-purple bg-opacity-90 py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-rounded font-bold text-2xl">
            PetWorld
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-white hover:text-white/80 transition-colors px-4 py-2">
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white bg-transparent hover:bg-white/10">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 p-4 bg-white">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/products/all" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            All Products
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/products/dogs" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            Dogs
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/products/cats" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            Cats
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/products/birds" 
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            Birds
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/cart" className="text-white hover:text-white/80 transition-colors px-4 py-2">
                    Cart
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <CartIcon />
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-pet-purple mt-4 rounded-md p-4 shadow-lg">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="text-white hover:text-white/80 block w-full py-2"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/all" 
                    className="text-white hover:text-white/80 block w-full py-2"
                    onClick={closeMobileMenu}
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/dogs" 
                    className="text-white hover:text-white/80 block w-full py-2"
                    onClick={closeMobileMenu}
                  >
                    Dogs
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/cats" 
                    className="text-white hover:text-white/80 block w-full py-2"
                    onClick={closeMobileMenu}
                  >
                    Cats
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/birds" 
                    className="text-white hover:text-white/80 block w-full py-2"
                    onClick={closeMobileMenu}
                  >
                    Birds
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
