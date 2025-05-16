
import { useState } from "react";
import PetCard from "./PetCard";
import { Button } from "@/components/ui/button";
import { pets } from "@/data/pets";

const FeaturedPets = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPets = activeCategory === "all" ? pets : pets.filter(pet => pet.type === activeCategory);

  // Category descriptions
  const categoryDescriptions = {
    all: "Meet our wonderful companions looking for their forever homes",
    dog: "Loyal, playful, and protective friends for active families",
    cat: "Independent, affectionate companions perfect for any home",
    bird: "Colorful, musical friends that bring joy to your space",
    fish: "Peaceful, low-maintenance pets for a tranquil environment"
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4">Featured Pets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {categoryDescriptions[activeCategory as keyof typeof categoryDescriptions]}
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
          >
            All Pets
          </Button>
          <Button
            variant={activeCategory === "dog" ? "default" : "outline"}
            onClick={() => setActiveCategory("dog")}
          >
            Dogs
          </Button>
          <Button
            variant={activeCategory === "cat" ? "default" : "outline"}
            onClick={() => setActiveCategory("cat")}
          >
            Cats
          </Button>
          <Button
            variant={activeCategory === "bird" ? "default" : "outline"}
            onClick={() => setActiveCategory("bird")}
          >
            Birds
          </Button>
          <Button
            variant={activeCategory === "fish" ? "default" : "outline"}
            onClick={() => setActiveCategory("fish")}
          >
            Fish
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPets.map((pet) => (
            <PetCard
              key={pet.id}
              id={pet.id}
              name={pet.name}
              breed={pet.breed}
              age={pet.age}
              imageUrl={pet.image}
              location={pet.location}
              type={pet.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
