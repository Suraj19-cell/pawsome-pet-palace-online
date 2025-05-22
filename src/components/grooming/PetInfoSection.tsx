
import React from "react";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { z } from "zod";

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

type PetInfoSectionProps = {
  control: Control<BookingFormValues>;
};

const PetInfoSection: React.FC<PetInfoSectionProps> = ({ control }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Pet Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
  );
};

export default PetInfoSection;

