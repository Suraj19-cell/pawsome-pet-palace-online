
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
            <Button className="bg-pet-orange hover:bg-pet-purple text-white font-medium px-8 py-6 rounded-full text-lg">
              Adopt a Pet
            </Button>
            <Button variant="outline" className="border-pet-blue hover:bg-pet-blue hover:text-white text-pet-blue font-medium px-8 py-6 rounded-full text-lg">
              Pet Care Tips
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
