
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

type PetCareCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
  price?: number;
  category?: string;
};

const PetCareCard = ({ title, description, imageUrl, className, price, category }: PetCareCardProps) => {
  return (
    <div className={cn("group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1", className)}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {category && (
          <Link to={`/products/${category.toLowerCase()}`}>
            <Badge className="absolute top-3 right-3 bg-white/80 text-black hover:bg-white/90">
              {category}
            </Badge>
          </Link>
        )}
      </div>
      <div className="p-4 bg-white">
        <div className="flex justify-between items-start">
          <h3 className="font-rounded font-semibold text-lg text-gray-800">{title}</h3>
          {price && (
            <span className="font-medium text-pet-blue">${price.toFixed(2)}</span>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <Link
            to={`/products/${category?.toLowerCase() || ''}`}
            className="inline-flex items-center text-pet-purple font-medium text-sm hover:text-pet-blue transition-colors"
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
          <button className="bg-pet-purple text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-pet-blue transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetCareCard;
