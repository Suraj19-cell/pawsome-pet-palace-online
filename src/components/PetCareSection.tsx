
import PetCareCard from "./PetCareCard";

const PetCareSection = () => {
  const petProducts = [
    {
      id: 1,
      title: "Premium Puppy Food",
      description: "High-quality nutrition for growing puppies with added vitamins and minerals.",
      price: 24.99,
      category: "Food",
      imageUrl: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Catnip Mouse Toys (3-Pack)",
      description: "Interactive toys filled with organic catnip to keep your cat entertained for hours.",
      price: 12.99,
      category: "Toys",
      imageUrl: "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Bird Cage Swing Set",
      description: "Colorful wooden swings and perches for small to medium-sized pet birds.",
      price: 9.99,
      category: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1544464116-32a2c8dbe8c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Aquarium Plant Decorations",
      description: "Lifelike artificial plants that create a natural habitat for your fish.",
      price: 14.99,
      category: "Decor",
      imageUrl: "https://images.unsplash.com/photo-1584553421349-3557471bed79?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Dog Dental Chew Treats",
      description: "Tasty treats that help clean teeth and freshen breath while providing entertainment.",
      price: 8.99,
      category: "Treats",
      imageUrl: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Cat Scratching Post",
      description: "Durable sisal post with plush top perch to satisfy natural scratching instincts.",
      price: 29.99,
      category: "Furniture",
      imageUrl: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

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
          <a
            href="#"
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default PetCareSection;
