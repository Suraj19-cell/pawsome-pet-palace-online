
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetCareCard from "@/components/PetCareCard";
import { petProducts } from "@/data/petProducts";

const AllProducts = () => {
  // Get unique categories
  const uniqueCategories = [...new Set(petProducts.map(product => product.category))];

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

            {uniqueCategories.map(category => (
              <div key={category} className="mb-16">
                <h3 className="text-2xl font-bold mb-6 border-b pb-2">{category}</h3>
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
