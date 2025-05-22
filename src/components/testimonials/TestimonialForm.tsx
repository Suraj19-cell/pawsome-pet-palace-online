
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SendHorizontal, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface TestimonialFormValues {
  name: string;
  email: string;
  content: string;
  petName?: string;
}

const TestimonialForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const { toast } = useToast();
  
  const form = useForm<TestimonialFormValues>({
    defaultValues: {
      name: "",
      email: "",
      content: "",
      petName: "",
    },
  });

  const onSubmit = (values: TestimonialFormValues) => {
    if (rating === 0) {
      toast({
        title: "Please add a rating",
        description: "Don't forget to rate your experience with us!",
        variant: "destructive",
      });
      return;
    }

    // In a real application, you'd send this data to your backend
    console.log({ ...values, rating });
    
    // Show success message
    toast({
      title: "Thank you for your feedback!",
      description: "Your testimonial has been submitted successfully.",
    });
    
    // Reset form
    form.reset();
    setRating(0);
  };

  return (
    <Card className="border-pet-teal/20">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-pet-teal">Share Your Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Smith" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="jane@example.com" required {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="petName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet's Name (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Fluffy" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col">
                <FormLabel className="mb-2">Your Rating</FormLabel>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={cn(
                        "h-6 w-6 cursor-pointer transition-all duration-100",
                        (hoveredRating || rating) >= star
                          ? "fill-pet-sand text-pet-sand"
                          : "text-gray-300"
                      )}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Testimonial</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your experience with our pet store..." 
                      className="min-h-[120px]" 
                      required 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full sm:w-auto" 
                disabled={form.formState.isSubmitting}
              >
                Submit Testimonial
                <SendHorizontal className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TestimonialForm;
