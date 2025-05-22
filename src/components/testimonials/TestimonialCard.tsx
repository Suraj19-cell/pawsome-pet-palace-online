
import { Star, StarHalf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  petImage?: string;
  rating: number;
  date: string;
  content: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  // Render the appropriate number of stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-pet-sand text-pet-sand" />);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-pet-sand text-pet-sand" />);
    }

    // Add remaining empty stars
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star 
          key={`empty-star-${i}`} 
          className="h-4 w-4 text-gray-300" 
        />
      );
    }

    return stars;
  };

  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Card className="h-full transition-all duration-300 hover:shadow-md">
      <CardHeader className="space-y-0 pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
              <AvatarFallback className="bg-pet-lightTeal text-pet-teal">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{testimonial.name}</h3>
              <p className="text-xs text-muted-foreground">{testimonial.date}</p>
            </div>
          </div>
          <div className="flex">{renderStars(testimonial.rating)}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{testimonial.content}</p>
        {testimonial.petImage && (
          <div className="mt-2 rounded-md overflow-hidden">
            <img 
              src={testimonial.petImage}
              alt={`${testimonial.name}'s pet`}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
