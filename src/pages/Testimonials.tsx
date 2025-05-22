
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import TestimonialForm from "@/components/testimonials/TestimonialForm";
import RelatedContent from "@/components/testimonials/RelatedContent";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Testimonials = () => {
  const [showAllTestimonials, setShowAllTestimonials] = useState(false);
  const displayedTestimonials = showAllTestimonials ? testimonials : testimonials.slice(0, 3);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        <section className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pet-navy mb-4">
            Customer Testimonials
          </h1>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Don't just take our word for it. See what our wonderful customers and their furry friends have to say about their experiences with PetWorld.
          </p>
        </section>

        {/* Featured testimonials in a hero section */}
        <section className="mb-16 bg-gradient-to-b from-pet-lightTeal to-white p-6 md:p-10 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>

        {/* All testimonials */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            What Our Customers Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          {testimonials.length > 3 && !showAllTestimonials && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                onClick={() => setShowAllTestimonials(true)}
                className="border-pet-teal text-pet-teal hover:bg-pet-teal/10"
              >
                View More Testimonials
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
        </section>

        {/* Leave a review section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Share Your Experience
          </h2>
          <div className="max-w-2xl mx-auto">
            <TestimonialForm />
          </div>
        </section>

        {/* Related content */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
            Explore More
          </h2>
          <RelatedContent />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
