
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PawPrint, Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-pet-purple">
            <PawPrint size={28} className="text-pet-orange" />
            <span className="font-rounded font-bold text-2xl">PawsomeWorld</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-rounded font-medium hover:text-pet-purple transition-colors">Home</a>
            <a href="#" className="font-rounded font-medium hover:text-pet-purple transition-colors">Adopt</a>
            <a href="#" className="font-rounded font-medium hover:text-pet-purple transition-colors">Pet Care</a>
            <a href="#" className="font-rounded font-medium hover:text-pet-purple transition-colors">Services</a>
            <a href="#" className="font-rounded font-medium hover:text-pet-purple transition-colors">About Us</a>
            <Button className="bg-pet-blue text-white hover:bg-pet-purple">Contact Us</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            <ul className="flex flex-col space-y-3">
              <li><a href="#" className="block py-2 font-rounded hover:text-pet-purple transition-colors">Home</a></li>
              <li><a href="#" className="block py-2 font-rounded hover:text-pet-purple transition-colors">Adopt</a></li>
              <li><a href="#" className="block py-2 font-rounded hover:text-pet-purple transition-colors">Pet Care</a></li>
              <li><a href="#" className="block py-2 font-rounded hover:text-pet-purple transition-colors">Services</a></li>
              <li><a href="#" className="block py-2 font-rounded hover:text-pet-purple transition-colors">About Us</a></li>
              <li><Button className="w-full bg-pet-blue text-white hover:bg-pet-purple">Contact Us</Button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
