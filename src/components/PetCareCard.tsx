
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { AspectRatio } from "./ui/aspect-ratio";

type PetCareCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
  price?: number;
  category?: string;
  id: number;
};

const PetCareCard = ({ id, title, description, imageUrl, className, price, category }: PetCareCardProps) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = () => {
    if (price) {
      addToCart({
        id,
        title,
        price,
        imageUrl,
        category: category || "uncategorized"
      });
    }
  };

  // Default fallback images based on category
  const getFallbackImage = (category?: string) => {
    switch (category?.toLowerCase()) {
      case "food":
        return "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case "toys":
        return "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case "accessories":
        return "https://images.unsplash.com/photo-1601758066053-3bdc0915c9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      case "equipment":
        return "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1601758066053-3bdc0915c9a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={cn("group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1", className)}>
      <div className="relative h-48 overflow-hidden">
        <AspectRatio ratio={4/3} className="bg-muted">
          <img
            src={imageError ? getFallbackImage(category) : imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
          />
        </AspectRatio>
        {category && (
          <Link to={`/products/${category.toLowerCase()}`}>
            <Badge className="absolute top-3 right-3 bg-pet-teal/80 text-white hover:bg-pet-teal">
              {category}
            </Badge>
          </Link>
        )}
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start">
          <h3 className="font-rounded font-semibold text-lg text-gray-800">{title}</h3>
          {price && (
            <span className="font-medium text-pet-teal">${price.toFixed(2)}</span>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/products/${category?.toLowerCase() || ''}`}
            className="inline-flex items-center text-pet-coral font-medium text-sm hover:text-pet-teal transition-colors"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
          <button 
            className="bg-pet-coral text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-pet-teal transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCareCard;
