
import { Cat, Dog, Bird, Fish } from "lucide-react";
import { cn } from "@/lib/utils";

type PetCategoryProps = {
  type: "cat" | "dog" | "bird" | "fish";
  title: string;
  count: number;
  className?: string;
};

const PetCategoryCard = ({ type, title, count, className }: PetCategoryProps) => {
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
    <div className={cn("rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer", getColor(), className)}>
      <div className="mb-4">{getIcon()}</div>
      <h3 className="font-rounded font-bold text-xl mb-1">{title}</h3>
      <p className="text-sm opacity-80">{count} available</p>
    </div>
  );
};

export default PetCategoryCard;
