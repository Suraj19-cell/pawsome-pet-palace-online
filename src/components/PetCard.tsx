
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type PetCardProps = {
  name: string;
  age: string;
  breed: string;
  imageUrl: string;
  location: string;
};

const PetCard = ({ name, age, breed, imageUrl, location }: PetCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name}, a ${breed}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md"
        >
          <Heart
            size={18}
            className={isFavorite ? "fill-pet-orange text-pet-orange" : "text-gray-400"}
          />
        </button>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-rounded font-bold text-xl">{name}</h3>
          <span className="bg-pet-lightBlue text-pet-blue text-xs px-2 py-1 rounded-full">
            {age}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-3">{breed}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </div>
        <Button className="w-full bg-pet-purple hover:bg-pet-blue">Meet {name}</Button>
      </div>
    </div>
  );
};

export default PetCard;
