
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PetCategories from "@/components/PetCategories";
import FeaturedPets from "@/components/FeaturedPets";
import PetCareSection from "@/components/PetCareSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col font-rounded">
      <Header />
      <main>
        <HeroSection />
        <PetCategories />
        <FeaturedPets />
        <PetCareSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
