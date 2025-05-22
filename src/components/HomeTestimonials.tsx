
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import { testimonials } from "@/data/testimonials";

const HomeTestimonials = () => {
  // Just show the first 3 testimonials on the homepage
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pet-lightTeal/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-rounded font-bold text-3xl md:text-4xl mb-4 text-pet-navy">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from pet owners who've experienced our services and products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            asChild
            className="border-pet-teal text-pet-teal hover:bg-pet-teal/10"
          >
            <Link to="/testimonials">
              View All Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
