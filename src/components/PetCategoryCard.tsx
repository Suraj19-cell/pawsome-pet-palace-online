
import { Cat, Dog, Bird, Fish } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type PetCategoryProps = {
  type: "cat" | "dog" | "bird" | "fish";
  title: string;
  count: number;
  className?: string;
  imageUrl?: string;
};

const PetCategoryCard = ({ type, title, count, className, imageUrl }: PetCategoryProps) => {
  const getIcon = () => {
    switch (type) {
      case "cat":
        return <Cat size={40} />;
      case "dog":
        return <Dog size={40} />;
      case "bird":
        return <Bird size={40} />;
      case "fish":
        return <Fish size={40} />;
      default:
        return <Cat size={40} />;
    }
  };

  const getColor = () => {
    switch (type) {
      case "cat":
        return "bg-pet-lightPurple text-pet-purple";
      case "dog":
        return "bg-pet-lightOrange text-pet-orange";
      case "bird":
        return "bg-pet-lightBlue text-pet-blue";
      case "fish":
        return "bg-pet-lightGreen text-pet-green";
      default:
        return "bg-pet-lightPurple text-pet-purple";
    }
  };

  return (
    <Link to={`/products/${type}`} className={cn("rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer block", className)}>
      <div className="relative h-48 w-full">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : null}
        <div className={cn("absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-6", getColor())}>
          <div className="mb-2">{getIcon()}</div>
          <h3 className="font-rounded font-bold text-xl mb-1 text-white">{title}</h3>
          <p className="text-sm text-white/80">{count} available</p>
        </div>
      </div>
    </Link>
  );
};

export default PetCategoryCard;
