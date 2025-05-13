
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartIcon from "./CartIcon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-pet-purple shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-rounded font-bold text-2xl">
            PetWorld
          </Link>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products/all"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <CartIcon />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
