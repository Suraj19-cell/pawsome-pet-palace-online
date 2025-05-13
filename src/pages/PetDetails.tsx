import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Heart, Award, Star, StarHalf } from "lucide-react";
import { toast } from "@/components/ui/sonner";

// Import this from a central location in a real app
const pets = [
  {
    id: 1,
    name: "Buddy",
    type: "dog",
    breed: "Golden Retriever",
    age: "3 years",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=762&q=80",
    location: "San Francisco, CA",
    description: "Buddy is an energetic and friendly Golden Retriever who loves outdoor activities and playing fetch. He's great with children and other pets, making him ideal for active families.",
    traits: ["Loyal", "Friendly", "Energetic", "Good with kids"],
    needs: ["Daily exercise", "Regular grooming", "Social interaction"],
    rating: 4.8
  },
  {
    id: 2,
    name: "Whiskers",
    type: "cat",
    breed: "Siamese",
    age: "2 years",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80",
    location: "Los Angeles, CA",
    description: "Whiskers is a curious and affectionate Siamese cat with striking blue eyes. She's independent but loves attention on her terms, perfect for busy households that still want a loving companion.",
    traits: ["Intelligent", "Vocal", "Affectionate", "Independent"],
    needs: ["Interactive toys", "Climbing spaces", "Moderate grooming"],
    rating: 4.7
  },
  {
    id: 3,
    name: "Chirpy",
    type: "bird",
    breed: "Canary",
    age: "1 year",
    image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    location: "Seattle, WA",
    description: "Chirpy is a melodious canary whose beautiful songs will fill your home with joy. Canaries are perfect for those who enjoy the company of birds without the need for handling them extensively.",
    traits: ["Musical", "Colorful", "Low-maintenance", "Entertaining"],
    needs: ["Spacious cage", "Quality seeds", "Fresh water daily"],
    rating: 4.5
  },
  {
    id: 4,
    name: "Bubbles",
    type: "fish",
    breed: "Goldfish",
    age: "6 months",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    location: "Portland, OR",
    description: "Bubbles is a vibrant goldfish that brings tranquility to any space. Goldfish are excellent stress relievers and require minimal maintenance, making them perfect for first-time pet owners or busy professionals.",
    traits: ["Peaceful", "Low-maintenance", "Calming", "Long-lived"],
    needs: ["Clean tank water", "Proper filtration", "Quality fish food"],
    rating: 4.2
  },
  {
    id: 5,
    name: "Rex",
    type: "dog",
    breed: "German Shepherd",
    age: "4 years",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    location: "New York, NY",
    description: "Rex is a highly intelligent and protective German Shepherd. He's loyal, trainable, and makes an excellent guard dog while still being gentle with family members. Perfect for those seeking both a companion and protector.",
    traits: ["Intelligent", "Loyal", "Protective", "Trainable"],
    needs: ["Mental stimulation", "Regular exercise", "Consistent training"],
    rating: 4.9
  },
  {
    id: 6,
    name: "Mittens",
    type: "cat",
    breed: "Tabby",
    age: "1 year",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    location: "Chicago, IL",
    description: "Mittens is a playful and curious tabby cat who loves exploring. She's adaptable to various living situations and will quickly become a beloved member of your family. Great for apartment dwellers and families alike.",
    traits: ["Playful", "Curious", "Adaptable", "Affectionate"],
    needs: ["Interactive play", "Scratching post", "Window perches"],
    rating: 4.6
  },
  {
    id: 7,
    name: "Tweety",
    type: "bird",
    breed: "Parakeet",
    age: "8 months",
    image: "https://images.unsplash.com/photo-1593610596149-2273da5c0762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    location: "Denver, CO",
    description: "Tweety is a social parakeet that can learn to mimic words and sounds. Parakeets make wonderful interactive pets that bring color and activity to your home without requiring extensive space.",
    traits: ["Social", "Intelligent", "Trainable", "Colorful"],
    needs: ["Social interaction", "Toys", "Out-of-cage time"],
    rating: 4.4
  },
  {
    id: 8,
    name: "Nemo",
    type: "fish",
    breed: "Clownfish",
    age: "1 year",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    location: "Miami, FL",
    description: "Nemo is a vibrant clownfish with a distinctive appearance. Clownfish are fascinating to watch and relatively easy to care for, making them excellent pets for marine aquarium enthusiasts or anyone looking to add life to their home décor.",
    traits: ["Hardy", "Distinctive", "Interesting behavior", "Reef-safe"],
    needs: ["Salt water tank", "Anemone (optional)", "Proper water parameters"],
    rating: 4.3
  },
];

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
    toast({
      title: "Adoption Started",
      description: `You've begun the adoption process for ${pet.name}. Our team will contact you soon!`,
    });
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
