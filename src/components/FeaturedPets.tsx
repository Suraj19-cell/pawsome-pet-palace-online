
import { useState } from "react";
import PetCard from "./PetCard";
import { Button } from "@/components/ui/button";

const FeaturedPets = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const pets = [
    {
      id: 1,
      name: "Buddy",
      type: "dog",
      breed: "Golden Retriever",
      age: "3 years",
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Whiskers",
      type: "cat",
      breed: "Siamese",
      age: "2 years",
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Chirpy",
      type: "bird",
      breed: "Canary",
      age: "1 year",
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "Bubbles",
      type: "fish",
      breed: "Goldfish",
      age: "6 months",
      image: "/placeholder.svg",
    },
  ];

  const filteredPets = activeCategory === "all" ? pets : pets.filter(pet => pet.type === activeCategory);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4">Featured Pets</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet some of our wonderful pets looking for their forever homes
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
              name={pet.name}
              type={pet.type}
              breed={pet.breed}
              age={pet.age}
              image={pet.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
