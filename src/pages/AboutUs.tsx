
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Hero section */}
        <section className="mb-16">
          <div className="relative rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pet-teal/90 to-pet-purple/70 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1581888227599-779811939961?w=1200&auto=format&fit=crop" 
              alt="Team with pets" 
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end h-full text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">About PetWorld</h1>
              <p className="text-lg md:text-xl max-w-2xl">Committed to providing exceptional care for pets and support for their owners since 2010.</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-pet-navy">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-700">
                PetWorld was founded in 2010 by a group of passionate pet lovers who saw the need for a comprehensive pet care service that puts animal welfare first. What started as a small pet supply store has grown into a full-service pet care center.
              </p>
              <p className="mb-4 text-gray-700">
                Our journey began when our founder, Emma Richards, adopted a rescue dog named Max who had special needs. The challenge of finding quality products and services for Max inspired Emma to create a one-stop solution for pet owners facing similar situations.
              </p>
              <p className="text-gray-700">
                Today, we're proud to serve thousands of pets and their owners, providing everything from premium nutrition to grooming services, adoption assistance, and health advice.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=600&auto=format&fit=crop" 
                alt="Pet store founder with pets" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Our Mission */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-pet-navy">Our Mission</h2>
          <div className="bg-pet-lightTeal/20 p-6 md:p-10 rounded-lg">
            <p className="text-xl md:text-2xl text-center italic text-pet-teal mb-6">
              "To enhance the lives of pets and strengthen the bond between pets and their owners through exceptional products, services, and education."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-pet-purple">Quality Care</h3>
                <p>We provide only the highest quality products and services that we would use for our own pets.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-pet-purple">Education</h3>
                <p>We empower pet owners with knowledge to make informed decisions about their pets' care.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-3 text-pet-purple">Community</h3>
                <p>We build a supportive community of pet lovers dedicated to animal welfare.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-pet-navy">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Emma Richards",
                role: "Founder & CEO",
                image: "https://i.pravatar.cc/300?img=1",
                bio: "Animal lover with over 15 years of experience in pet care."
              },
              {
                name: "Michael Chen",
                role: "Head Veterinarian",
                image: "https://i.pravatar.cc/300?img=8",
                bio: "Specialized in small animal medicine and preventative care."
              },
              {
                name: "Sarah Johnson",
                role: "Lead Groomer",
                image: "https://i.pravatar.cc/300?img=5",
                bio: "Award-winning pet stylist with expertise in all breeds."
              },
              {
                name: "David Williams",
                role: "Nutrition Specialist",
                image: "https://i.pravatar.cc/300?img=11",
                bio: "Focused on customized nutrition plans for pets of all ages."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-lg">{member.name}</h3>
                  <p className="text-sm text-pet-teal mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
