import React from "react";
import { Dog, Cat, Bird, Info, Scissors } from "lucide-react";

const GroomingSidebar = () => {
  return (
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
  );
};

export default GroomingSidebar;
