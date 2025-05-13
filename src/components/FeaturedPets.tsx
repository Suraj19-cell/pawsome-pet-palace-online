
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
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=762&q=80",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      name: "Whiskers",
      type: "cat",
      breed: "Siamese",
      age: "2 years",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80",
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      name: "Chirpy",
      type: "bird",
      breed: "Canary",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
      location: "Seattle, WA"
    },
    {
      id: 4,
      name: "Bubbles",
      type: "fish",
      breed: "Goldfish",
      age: "6 months",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      location: "Portland, OR"
    },
    {
      id: 5,
      name: "Rex",
      type: "dog",
      breed: "German Shepherd",
      age: "4 years",
      image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      location: "New York, NY"
    },
    {
      id: 6,
      name: "Mittens",
      type: "cat",
      breed: "Tabby",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      location: "Chicago, IL"
    },
    {
      id: 7,
      name: "Tweety",
      type: "bird",
      breed: "Parakeet",
      age: "8 months",
      image: "https://images.unsplash.com/photo-1593610596149-2273da5c0762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      location: "Denver, CO"
    },
    {
      id: 8,
      name: "Nemo",
      type: "fish",
      breed: "Clownfish",
      age: "1 year",
      image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      location: "Miami, FL"
    },
  ];

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
