
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import { z } from "zod";
import ServicesSelection from "./ServicesSelection";

// Define the schema type for the component props
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

type ServiceDetailsSectionProps = {
  control: Control<BookingFormValues>;
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
};

const ServiceDetailsSection: React.FC<ServiceDetailsSectionProps> = ({ 
  control, 
  selectedServices, 
  onServicesChange 
}) => {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="services"
        render={() => (
          <FormItem>
            <FormLabel>Grooming Services</FormLabel>
            <FormControl>
              <ServicesSelection
                selectedServices={selectedServices}
                onServicesChange={onServicesChange}
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
        control={control}
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
  );
};

export default ServiceDetailsSection;

