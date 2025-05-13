
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  petInterest: z.string().min(2, { message: "Please tell us what pet you're interested in" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const petCareTips = [
  {
    title: "Regular Veterinary Check-ups",
    content: "Schedule regular check-ups with your veterinarian to ensure your pet stays healthy. Preventive care is key to a long, happy life for your furry friend.",
    icon: "🏥"
  },
  {
    title: "Proper Nutrition",
    content: "Feed your pet high-quality food appropriate for their species, age, and health status. Avoid overfeeding and limit treats to prevent obesity.",
    icon: "🍽️"
  },
  {
    title: "Regular Exercise",
    content: "All pets need regular exercise to maintain physical and mental health. Dogs need daily walks, cats need play sessions, and even small pets need time outside their cages.",
    icon: "🏃‍♂️"
  },
  {
    title: "Grooming",
    content: "Regular grooming keeps your pet's coat healthy and reduces shedding. It's also a great opportunity to check for any abnormalities like lumps or skin issues.",
    icon: "✂️"
  },
  {
    title: "Dental Care",
    content: "Brush your pet's teeth regularly and provide dental treats or toys to prevent dental disease, which can lead to serious health problems if left untreated.",
    icon: "🦷"
  }
];

const HeroSection = () => {
  const [adoptDialogOpen, setAdoptDialogOpen] = useState(false);
  const [tipsDialogOpen, setTipsDialogOpen] = useState(false);
  
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      petInterest: "",
      message: ""
    },
  });

  const handleSubmit = (values: z.infer<typeof contactSchema>) => {
    console.log(values);
    toast("Thank you! We'll contact you soon about adopting a pet.");
    setAdoptDialogOpen(false);
    form.reset();
  };

  return (
    <section className="relative bg-pet-lightBlue py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501286353178-1ec871b47838')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl">
          <h1 className="font-rounded font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-pet-purple">
            Find Your Perfect <span className="text-pet-orange">Furry</span> Companion
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Discover resources for pet adoption, expert care tips, and everything you need to give your companion the best life possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-pet-orange hover:bg-pet-purple text-white font-medium px-8 py-6 rounded-full text-lg"
              onClick={() => setAdoptDialogOpen(true)}
            >
              Adopt a Pet
            </Button>
            <Button 
              variant="outline" 
              className="border-pet-blue hover:bg-pet-blue hover:text-white text-pet-blue font-medium px-8 py-6 rounded-full text-lg"
              onClick={() => setTipsDialogOpen(true)}
            >
              Pet Care Tips
            </Button>
          </div>
        </div>
      </div>

      {/* Adopt a Pet Dialog with Contact Form */}
      <Dialog open={adoptDialogOpen} onOpenChange={setAdoptDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-rounded font-bold text-pet-purple mb-2">Adopt a Pet</DialogTitle>
            <p className="text-gray-600">Please fill out this form and we'll connect you with your perfect companion!</p>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="(555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="petInterest"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pet You're Interested In</FormLabel>
                    <FormControl>
                      <Input placeholder="Dog, Cat, Bird, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about what you're looking for in a pet..." 
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-pet-purple hover:bg-pet-orange text-white"
                >
                  Submit Adoption Interest
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Pet Care Tips Dialog */}
      <Dialog open={tipsDialogOpen} onOpenChange={setTipsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-rounded font-bold text-pet-blue mb-2">Essential Pet Care Tips</DialogTitle>
            <p className="text-gray-600">Keep your furry friends healthy and happy with these important care guidelines.</p>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            {petCareTips.map((tip, index) => (
              <div key={index} className="flex gap-4 p-4 bg-pet-lightBlue rounded-lg">
                <div className="text-3xl">{tip.icon}</div>
                <div>
                  <h3 className="font-medium text-lg text-pet-purple">{tip.title}</h3>
                  <p className="text-gray-700">{tip.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setTipsDialogOpen(false)} 
              className="bg-pet-blue hover:bg-pet-purple text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
