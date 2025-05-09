
import PetCard from "./PetCard";

const FeaturedPets = () => {
  const featuredPets = [
    {
      id: 1,
      name: "Luna",
      age: "2 years",
      breed: "Tabby Cat",
      imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      location: "Oakland, CA"
    },
    {
      id: 2,
      name: "Max",
      breed: "Golden Retriever",
      age: "3 years",
      imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec871b47838",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      name: "Coco",
      breed: "Parrot",
      age: "1 year",
      imageUrl: "https://images.unsplash.com/photo-1441057206919-63d19fac2369",
      location: "Berkeley, CA"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4">Pets Looking for a Home</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our featured pets who are currently available for adoption and looking for their forever homes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPets.map(pet => (
            <PetCard
              key={pet.id}
              name={pet.name}
              age={pet.age}
              breed={pet.breed}
              imageUrl={pet.imageUrl}
              location={pet.location}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-pet-blue hover:bg-pet-purple font-medium px-8 py-6 rounded-full text-lg">
            View All Available Pets
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
