
import { useState } from "react";
import { Scissors, Bath, Cut, Paw } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface GroomingService {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  price: number;
}

const groomingServices: GroomingService[] = [
  {
    id: "bath",
    name: "Bath & Brush",
    icon: <Bath className="h-5 w-5" />,
    description: "Full bath with shampoo, conditioner, and thorough brushing",
    price: 35
  },
  {
    id: "haircut",
    name: "Haircut",
    icon: <Cut className="h-5 w-5" />,
    description: "Professional styling and trimming to your specifications",
    price: 45
  },
  {
    id: "nails",
    name: "Nail Trimming",
    icon: <Scissors className="h-5 w-5" />,
    description: "Careful nail trimming to appropriate length",
    price: 20
  },
  {
    id: "teeth",
    name: "Teeth Brushing",
    icon: <Bath className="h-5 w-5" />,
    description: "Dental hygiene care for your pet's teeth",
    price: 25
  },
  {
    id: "ears",
    name: "Ear Cleaning",
    icon: <Paw className="h-5 w-5" />,
    description: "Gentle cleaning of ears and ear canal",
    price: 20
  },
  {
    id: "deshedding",
    name: "De-shedding Treatment",
    icon: <Scissors className="h-5 w-5" />,
    description: "Special treatment to reduce shedding",
    price: 40
  },
];

interface ServicesSelectionProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
}

const ServicesSelection = ({
  selectedServices,
  onServicesChange,
}: ServicesSelectionProps) => {
  const handleToggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onServicesChange(selectedServices.filter(id => id !== serviceId));
    } else {
      onServicesChange([...selectedServices, serviceId]);
    }
  };

  const calculateTotal = () => {
    return groomingServices
      .filter(service => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {groomingServices.map((service) => (
          <div
            key={service.id}
            className={cn(
              "flex items-start p-3 border rounded-lg cursor-pointer transition-colors",
              selectedServices.includes(service.id)
                ? "border-pet-teal bg-pet-teal/10"
                : "border-gray-200 hover:border-pet-teal/50"
            )}
            onClick={() => handleToggleService(service.id)}
          >
            <Checkbox
              id={`service-${service.id}`}
              checked={selectedServices.includes(service.id)}
              onCheckedChange={() => handleToggleService(service.id)}
              className="mt-1 mr-3"
            />
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <label
                  htmlFor={`service-${service.id}`}
                  className="font-medium cursor-pointer flex items-center gap-1.5"
                >
                  {service.icon}
                  {service.name}
                </label>
                <span className="text-pet-teal font-semibold text-sm">
                  ${service.price}
                </span>
              </div>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {selectedServices.length > 0 && (
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-medium">Total Estimate:</span>
            <span className="text-lg font-semibold text-pet-teal">
              ${calculateTotal()}
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Final price may vary based on pet size and condition
          </p>
        </div>
      )}
    </div>
  );
};

export default ServicesSelection;
