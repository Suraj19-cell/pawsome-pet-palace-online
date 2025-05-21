
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, Scissors, Dog, Cat, Bird, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import ServicesSelection from "@/components/grooming/ServicesSelection";

// Define the schema for the booking form
const bookingFormSchema = z.object({
  petName: z.string().min(1, "Pet name is required"),
  petType: z.string().min(1, "Pet type is required"),
  petBreed: z.string().min(1, "Pet breed is required"),
  petAge: z.string().min(1, "Pet age is required"),
  ownerName: z.string().min(1, "Your name is required"),
  ownerEmail: z.string().email("Invalid email address"),
  ownerPhone: z.string().min(10, "Phone number must be at least 10 digits"),
  appointmentDate: z.date({
    required_error: "Please select an appointment date",
  }),
  appointmentTime: z.string().min(1, "Please select an appointment time"),
  specialRequests: z.string().optional(),
  services: z.array(z.string()).min(1, "Please select at least one service"),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const Grooming = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState<string[]>([]);
  
  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      petName: "",
      petType: "",
      petBreed: "",
      petAge: "",
      ownerName: "",
      ownerEmail: "",
      ownerPhone: "",
      specialRequests: "",
      services: [],
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log("Booking submitted:", data);
    toast.success("Grooming appointment booked successfully!", {
      description: `Your appointment is scheduled for ${format(data.appointmentDate, "EEEE, MMMM d")} at ${data.appointmentTime}`,
    });
    
    // Navigate to success page or home page after delay
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // Update form when services change
  const handleServiceChange = (selectedServices: string[]) => {
    setServices(selectedServices);
    form.setValue("services", selectedServices);
  };

  return (
    <div className="min-h-screen flex flex-col font-rounded">
      <Header />
      <main className="flex-grow">
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Book a Grooming Appointment
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Schedule a grooming session for your furry friend and let our professional groomers take care of them
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-1">
                <div className="bg-pet-teal/10 rounded-lg p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Scissors className="h-5 w-5" />
                    Our Grooming Services
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Dog className="h-5 w-5 mt-1 text-pet-teal" />
                      <div>
                        <h4 className="font-medium">Dogs</h4>
                        <p className="text-sm text-gray-600">
                          Full grooming, coat trimming, nail clipping, ear cleaning, and more
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Cat className="h-5 w-5 mt-1 text-pet-teal" />
                      <div>
                        <h4 className="font-medium">Cats</h4>
                        <p className="text-sm text-gray-600">
                          Gentle brushing, nail trimming, ear cleaning, and special treatments
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Bird className="h-5 w-5 mt-1 text-pet-teal" />
                      <div>
                        <h4 className="font-medium">Birds & Small Pets</h4>
                        <p className="text-sm text-gray-600">
                          Specialized grooming services for birds and other small pets
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-100 p-4 rounded-md">
                    <div className="flex gap-2">
                      <Info className="h-5 w-5 mt-0.5 text-amber-700 shrink-0" />
                      <div>
                        <h5 className="font-medium text-amber-800">Important Note</h5>
                        <p className="text-sm text-amber-700">
                          All pets must be up to date on vaccinations. Please bring vaccination records to your appointment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border p-6 shadow-sm">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Pet Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="petName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pet Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your pet's name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="petType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pet Type</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select pet type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="dog">Dog</SelectItem>
                                    <SelectItem value="cat">Cat</SelectItem>
                                    <SelectItem value="bird">Bird</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="petBreed"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pet Breed</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your pet's breed" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="petAge"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Pet Age</FormLabel>
                                <FormControl>
                                  <Input placeholder="Age in years" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Owner Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="ownerName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="ownerPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your phone number" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="ownerEmail"
                            render={({ field }) => (
                              <FormItem className="md:col-span-2">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    {...field}
                                  />
                                </FormControl>
                                <FormDescription>
                                  We'll send confirmation and reminder emails to this address
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Appointment Details</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="appointmentDate"
                            render={({ field }) => (
                              <FormItem className="flex flex-col">
                                <FormLabel>Appointment Date</FormLabel>
                                <Popover>
                                  <PopoverTrigger asChild>
                                    <FormControl>
                                      <Button
                                        variant={"outline"}
                                        className={cn(
                                          "w-full pl-3 text-left font-normal",
                                          !field.value && "text-muted-foreground"
                                        )}
                                      >
                                        {field.value ? (
                                          format(field.value, "PPP")
                                        ) : (
                                          <span>Pick a date</span>
                                        )}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                      </Button>
                                    </FormControl>
                                  </PopoverTrigger>
                                  <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => {
                                        // Disable past dates and Sundays
                                        const today = new Date();
                                        today.setHours(0, 0, 0, 0);
                                        return (
                                          date < today ||
                                          date.getDay() === 0 || // Sunday
                                          date > new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
                                        );
                                      }}
                                      initialFocus
                                      className="p-3 pointer-events-auto"
                                    />
                                  </PopoverContent>
                                </Popover>
                                <FormDescription>
                                  Select a date up to 30 days in the future. We're closed on Sundays.
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="appointmentTime"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Appointment Time</FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a time" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {availableTimes.map((time) => (
                                      <SelectItem key={time} value={time}>
                                        {time}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormDescription>
                                  Choose a time slot for your appointment
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="services"
                          render={() => (
                            <FormItem>
                              <FormLabel>Grooming Services</FormLabel>
                              <FormControl>
                                <ServicesSelection
                                  selectedServices={services}
                                  onServicesChange={handleServiceChange}
                                />
                              </FormControl>
                              <FormDescription>
                                Choose the services you'd like for your pet
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="specialRequests"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Special Requests</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Any additional information or specific instructions for the groomer"
                                  className="resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Include any special requirements, health concerns, or preferences
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Book Appointment
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Grooming;
