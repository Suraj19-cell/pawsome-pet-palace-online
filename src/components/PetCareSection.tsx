
import PetCareCard from "./PetCareCard";

const PetCareSection = () => {
  const careTips = [
    {
      id: 1,
      title: "Nutrition Guide for Puppies",
      description: "Learn what to feed your new puppy to ensure healthy growth and development.",
      imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec871b47838"
    },
    {
      id: 2,
      title: "Cat Grooming Essentials",
      description: "Keep your feline friend healthy and happy with these grooming tips and tricks.",
      imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
    },
    {
      id: 3,
      title: "Bird Care Fundamentals",
      description: "Everything you need to know about caring for pet birds, from diet to environment.",
      imageUrl: "https://images.unsplash.com/photo-1441057206919-63d19fac2369"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4">Pet Care Tips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert advice to keep your pets happy and healthy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careTips.map(tip => (
            <PetCareCard
              key={tip.id}
              title={tip.title}
              description={tip.description}
              imageUrl={tip.imageUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="text-pet-blue font-medium text-lg inline-flex items-center hover:text-pet-purple transition-colors"
          >
            View All Pet Care Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PetCareSection;
