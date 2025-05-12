
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetCareCard from "@/components/PetCareCard";
import { petProducts } from "@/data/petProducts";

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  // Filter products by the category from URL parameter (case insensitive)
  const filteredProducts = petProducts.filter(
    (product) => product.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="min-h-screen flex flex-col font-rounded">
      <Header />
      <main>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4">
                {category} Products
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our selection of high-quality {category?.toLowerCase()} products for your pets
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
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
            ) : (
              <div className="text-center py-8">
                <p className="text-lg text-gray-600">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductCategory;
