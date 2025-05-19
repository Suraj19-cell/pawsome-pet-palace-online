
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetCareCard from "@/components/PetCareCard";
import { petProducts } from "@/data/petProducts";

const AllProducts = () => {
  // Get unique categories
  const uniqueCategories = [...new Set(petProducts.map(product => product.category))];
  
  // Category specialty descriptions
  const categoryDescriptions = {
    "Food": "Nutritionally balanced diets for optimal pet health",
    "Toys": "Engaging toys to keep your pets active and entertained",
    "Accessories": "Essential items to enhance your pet's comfort",
    "Equipment": "High-quality equipment for proper pet care"
  };

  // Handle scrolling to sections based on hash in URL
  useEffect(() => {
    // Get the hash from the URL (e.g., #dogs)
    const hash = window.location.hash.substring(1);
    
    if (hash) {
      // Delay scrolling slightly to ensure the page is fully loaded
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, []);

  // Get products for each category
  const getCategoryProducts = (category: string) => {
    return petProducts.filter(product => 
      // Find products that match the category or have related keywords in their title/description
      product.category === category || 
      product.title.toLowerCase().includes(category.toLowerCase()) ||
      product.description.toLowerCase().includes(category.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen flex flex-col font-rounded">
      <Header />
      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4">
                All Pet Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our complete selection of high-quality pet products
              </p>
            </div>

            {/* Main categories with anchor IDs for smooth scrolling */}
            <div id="dogs" className="mb-16 scroll-mt-24">
              <div className="border-b pb-2 mb-6">
                <h3 className="text-2xl font-bold">Dogs</h3>
                <p className="text-pet-green text-sm mt-1">
                  Premium products for your canine companions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCategoryProducts('dogs')
                  .map(product => (
                    <PetCareCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      imageUrl={product.imageUrl}
                      price={product.price}
                      category={product.category}
                    />
                  ))}
              </div>
            </div>

            <div id="cats" className="mb-16 scroll-mt-24">
              <div className="border-b pb-2 mb-6">
                <h3 className="text-2xl font-bold">Cats</h3>
                <p className="text-pet-green text-sm mt-1">
                  Specialized products for your feline friends
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCategoryProducts('cats')
                  .map(product => (
                    <PetCareCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      imageUrl={product.imageUrl}
                      price={product.price}
                      category={product.category}
                    />
                  ))}
              </div>
            </div>

            <div id="birds" className="mb-16 scroll-mt-24">
              <div className="border-b pb-2 mb-6">
                <h3 className="text-2xl font-bold">Birds</h3>
                <p className="text-pet-green text-sm mt-1">
                  Specialized products for your avian companions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCategoryProducts('birds')
                  .map(product => (
                    <PetCareCard
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      imageUrl={product.imageUrl}
                      price={product.price}
                      category={product.category}
                    />
                  ))}
              </div>
            </div>

            {/* Display remaining categories */}
            {uniqueCategories
              .filter(category => !['dogs', 'cats', 'birds'].includes(category.toLowerCase()))
              .map(category => (
                <div key={category} className="mb-16">
                  <div className="border-b pb-2 mb-6">
                    <h3 className="text-2xl font-bold">{category}</h3>
                    <p className="text-pet-green text-sm mt-1">
                      {categoryDescriptions[category as keyof typeof categoryDescriptions] || 
                      "Quality products for your beloved pets"}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {petProducts
                      .filter(product => product.category === category)
                      .map(product => (
                        <PetCareCard
                          key={product.id}
                          id={product.id}
                          title={product.title}
                          description={product.description}
                          imageUrl={product.imageUrl}
                          price={product.price}
                          category={product.category}
                        />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AllProducts;
