
import { Link } from "react-router-dom";
import PetCareCard from "./PetCareCard";
import { petProducts } from "@/data/petProducts";

const PetCareSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4">Pet Care Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything your furry, feathered, or finned friend needs to thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {petProducts.map(product => (
            <PetCareCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/products/all"
            className="text-pet-blue font-medium text-lg inline-flex items-center hover:text-pet-purple transition-colors"
          >
            View All Pet Products
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PetCareSection;
