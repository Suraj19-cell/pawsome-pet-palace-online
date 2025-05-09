
import { cn } from "@/lib/utils";

type PetCareCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
};

const PetCareCard = ({ title, description, imageUrl, className }: PetCareCardProps) => {
  return (
    <div className={cn("group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg", className)}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        <h3 className="absolute bottom-4 left-4 right-4 text-white font-rounded font-semibold text-lg">{title}</h3>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-600 text-sm">{description}</p>
        <a
          href="#"
          className="mt-3 inline-flex items-center text-pet-purple font-medium text-sm hover:text-pet-blue transition-colors"
        >
          Read More
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
        </a>
      </div>
    </div>
  );
};

export default PetCareCard;
