
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import GroomingSidebar from "@/components/grooming/GroomingSidebar";
import PetInfoSection from "@/components/grooming/PetInfoSection";
import OwnerInfoSection from "@/components/grooming/OwnerInfoSection";
import AppointmentSection from "@/components/grooming/AppointmentSection";
import ServiceDetailsSection from "@/components/grooming/ServiceDetailsSection";

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
                <GroomingSidebar />
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg border p-6 shadow-sm">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <PetInfoSection control={form.control} />
                      <OwnerInfoSection control={form.control} />
                      <AppointmentSection control={form.control} />
                      <ServiceDetailsSection 
                        control={form.control}
                        selectedServices={services}
                        onServicesChange={handleServiceChange}
                      />
                      
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

