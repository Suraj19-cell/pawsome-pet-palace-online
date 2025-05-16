import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart, Award, Star, StarHalf } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { pets } from "@/data/pets";

// Type advantages for different pet types
const typeAdvantages = {
  dog: [
    "Provide companionship and reduce feelings of loneliness",
    "Encourage exercise and outdoor activities",
    "Help teach children responsibility",
    "Can offer protection and security",
    "Highly trainable and adaptable to family routines"
  ],
  cat: [
    "Self-sufficient and require less maintenance",
    "Perfect for busy households or apartment living",
    "Natural pest controllers",
    "Quiet and clean companions",
    "Independent yet affectionate on their terms"
  ],
  bird: [
    "Bring cheerful sounds and music to your home",
    "Require minimal space compared to larger pets",
    "Can form strong bonds with owners",
    "Many species are highly intelligent and trainable",
    "Relatively inexpensive to maintain"
  ],
  fish: [
    "Proven to reduce stress and lower blood pressure",
    "Perfect for people with allergies to furry pets",
    "Require minimal daily care once tank is established",
    "Educational for children to learn about ecosystems",
    "Enhance home décor with colorful, living art"
  ]
};

const PetDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Find the pet with the matching id
  const pet = pets.find(p => p.id === parseInt(id || "0"));
  
  if (!pet) {
    return (
      <div className="min-h-screen flex flex-col font-rounded">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="font-bold text-2xl">Pet not found</h2>
            <p className="mt-4">The pet you're looking for doesn't exist or has been adopted.</p>
            <Link to="/" className="mt-6 inline-block">
              <Button>Return Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAdoptClick = () => {
    toast(`You've begun the adoption process for ${pet!.name}. Our team will contact you soon!`);
  };

  // Generate stars based on rating
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400" size={18} />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="text-yellow-400" size={18} />);
    }
    
    return stars;
  };
  
  return (
    <div className="min-h-screen flex flex-col font-rounded">
      <Header />
      <main className="flex-grow">
        <div className="bg-slate-50 py-8">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative">
                  <img 
                    src={pet.image} 
                    alt={pet.name} 
                    className="h-full w-full object-cover"
                    style={{ maxHeight: "500px" }} 
                  />
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className="bg-white p-2 rounded-full shadow-md"
                    >
                      <Heart
                        size={20}
                        className={isFavorite ? "fill-pet-orange text-pet-orange" : "text-gray-400"}
                      />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 bg-pet-blue text-white px-3 py-1 text-sm font-medium">
                    {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <div className="flex justify-between items-start">
                    <h1 className="font-rounded font-bold text-3xl">{pet.name}</h1>
                    <span className="bg-pet-lightBlue text-pet-blue px-3 py-1 rounded-full text-sm">
                      {pet.age}
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-600 mt-2">{pet.breed}</p>
                  
                  <div className="flex items-center mt-2 text-sm text-gray-500">
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
                    {pet.location}
                  </div>
                  
                  <div className="flex mt-3">
                    {renderRating(pet.rating)}
                    <span className="text-sm text-gray-600 ml-2">{pet.rating}/5</span>
                  </div>
                  
                  <div className="mt-6">
                    <h2 className="font-bold text-lg">About {pet.name}</h2>
                    <p className="mt-2 text-gray-700">{pet.description}</p>
                  </div>
                  
                  <div className="mt-6">
                    <h2 className="font-bold text-lg flex items-center">
                      <Award className="mr-2 text-pet-purple" size={18} /> 
                      Key Traits
                    </h2>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {pet.traits.map((trait, idx) => (
                        <span key={idx} className="bg-pet-lightBlue text-pet-blue text-xs px-3 py-1 rounded-full">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h2 className="font-bold text-lg">Care Needs</h2>
                    <ul className="mt-2 list-disc list-inside text-gray-700">
                      {pet.needs.map((need, idx) => (
                        <li key={idx}>{need}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Button onClick={handleAdoptClick} className="w-full bg-pet-purple hover:bg-pet-blue">
                      Start Adoption Process
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="font-bold text-2xl mb-6">
                Why {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}s Make Great Pets
              </h2>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <p className="italic text-pet-green mb-4">
                  "{pet.type === 'dog' ? "A dog is the only thing on earth that loves you more than you love yourself." : 
                    pet.type === 'cat' ? "Time spent with cats is never wasted." :
                    pet.type === 'bird' ? "A bird does not sing because it has an answer. It sings because it has a song." :
                    "The happiness of a fish can never be measured by its tank."}"
                </p>
                
                <ul className="space-y-3 mt-4">
                  {typeAdvantages[pet.type as keyof typeof typeAdvantages]?.map((advantage, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-pet-purple mr-2">•</span>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 p-4 bg-pet-lightBlue rounded-lg">
                  <p className="text-center text-pet-blue">
                    Bringing {pet.name} home could be one of the most rewarding decisions for your family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PetDetails;
