
import PetCategoryCard from "./PetCategoryCard";

const PetCategories = () => {
  const categories = [
    {
      type: "cat" as const,
      title: "Cats",
      count: 42,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80"
    },
    {
      type: "dog" as const,
      title: "Dogs",
      count: 56,
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      type: "bird" as const,
      title: "Birds",
      count: 24,
      image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      type: "fish" as const,
      title: "Fish",
      count: 36,
      image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4">Find Pets by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our various pet categories to find your perfect companion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <PetCategoryCard 
              key={category.type}
              type={category.type} 
              title={category.title} 
              count={category.count}
              imageUrl={category.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCategories;
