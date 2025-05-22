
import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Control } from "react-hook-form";
import { cn } from "@/lib/utils";
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

type AppointmentSectionProps = {
  control: Control<BookingFormValues>;
};

const AppointmentSection: React.FC<AppointmentSectionProps> = ({ control }) => {
  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", 
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Appointment Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
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
          control={control}
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
  );
};

export default AppointmentSection;

