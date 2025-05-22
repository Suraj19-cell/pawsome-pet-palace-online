
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
        imageUrl: imageError ? getFallbackImage(category) : imageUrl,
        category: category || "uncategorized"
      });
    }
  };

  // Improved fallback images with more reliable sources
  const getFallbackImage = (category?: string) => {
    switch (category?.toLowerCase()) {
      case "food":
        return "https://images.pexels.com/photos/6816030/pexels-photo-6816030.jpeg?auto=compress&cs=tinysrgb&w=800";
      case "toys":
        return "https://images.pexels.com/photos/6685884/pexels-photo-6685884.jpeg?auto=compress&cs=tinysrgb&w=800";
      case "accessories":
        return "https://images.pexels.com/photos/6130762/pexels-photo-6130762.jpeg?auto=compress&cs=tinysrgb&w=800";
      case "equipment":
        return "https://images.pexels.com/photos/5731861/pexels-photo-5731861.jpeg?auto=compress&cs=tinysrgb&w=800";
      default:
        return "https://images.pexels.com/photos/6685527/pexels-photo-6685527.jpeg?auto=compress&cs=tinysrgb&w=800";
    }
  };

  const handleImageError = () => {
    console.log(`Image failed to load for product: ${title}, using fallback image`);
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
