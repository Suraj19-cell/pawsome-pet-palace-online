
import PetCategoryCard from "./PetCategoryCard";

const PetCategories = () => {
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
          <PetCategoryCard type="cat" title="Cats" count={42} />
          <PetCategoryCard type="dog" title="Dogs" count={56} />
          <PetCategoryCard type="bird" title="Birds" count={24} />
          <PetCategoryCard type="fish" title="Fish" count={36} />
        </div>
      </div>
    </section>
  );
};

export default PetCategories;
