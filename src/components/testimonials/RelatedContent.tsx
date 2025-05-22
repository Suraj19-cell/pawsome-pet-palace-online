
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedProductProps {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
}

interface RelatedBlogProps {
  id: string;
  title: string;
  image: string;
  excerpt: string;
}

const RelatedContent = () => {
  // Sample data for popular products
  const popularProducts: RelatedProductProps[] = [
    {
      id: "prod1",
      name: "Premium Dog Food",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=500&h=350&fit=crop",
      price: 29.99,
      category: "dog-food"
    },
    {
      id: "prod2",
      name: "Interactive Cat Toy",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=500&h=350&fit=crop",
      price: 12.99,
      category: "cat-toys"
    },
    {
      id: "prod3",
      name: "Pet Grooming Kit",
      image: "https://images.unsplash.com/photo-1482452636542-ebb5f983f197?w=500&h=350&fit=crop",
      price: 34.99,
      category: "grooming"
    }
  ];

  // Sample data for blog posts
  const blogPosts: RelatedBlogProps[] = [
    {
      id: "blog1",
      title: "Essential Tips for First-Time Pet Owners",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=500&h=300&fit=crop",
      excerpt: "Learn the basics of pet care to ensure your new furry friend stays happy and healthy."
    },
    {
      id: "blog2",
      title: "How to Choose the Right Food for Your Pet",
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop",
      excerpt: "Nutrition plays a crucial role in your pet's overall health. Find out how to pick the best food."
    }
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularProducts.map((product) => (
            <Link to={`/products/${product.category}`} key={product.id}>
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-pet-teal font-medium">${product.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Link 
            to="/products/all" 
            className="inline-flex items-center text-pet-teal hover:text-pet-coral transition-colors"
          >
            View all products <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Pet Care Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                <div className="mt-3">
                  <span className="text-pet-teal text-sm font-medium hover:text-pet-coral transition-colors inline-flex items-center">
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RelatedContent;
