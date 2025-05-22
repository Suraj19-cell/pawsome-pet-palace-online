
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Clock, Calendar, Heart, Scissors, ShoppingBag } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Pet Grooming",
      icon: <Scissors className="h-10 w-10 text-pet-teal" />,
      description: "Professional grooming services for all breeds of dogs and cats.",
      benefits: [
        "Bath and brush out",
        "Haircuts and styling",
        "Nail trimming and filing",
        "Ear cleaning",
        "Teeth brushing"
      ],
      link: "/grooming",
      image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600&auto=format&fit=crop"
    },
    {
      title: "Pet Health Check-ups",
      icon: <Heart className="h-10 w-10 text-pet-orange" />,
      description: "Regular health assessments to ensure your pet stays in optimal condition.",
      benefits: [
        "Physical examination",
        "Preventative care",
        "Vaccination updates",
        "Dental check-up",
        "Nutrition consultation"
      ],
      link: "#",
      image: "https://images.unsplash.com/photo-1581077452315-b8444357766b?w=600&auto=format&fit=crop"
    },
    {
      title: "Pet Supplies",
      icon: <ShoppingBag className="h-10 w-10 text-pet-purple" />,
      description: "Premium quality pet food, toys, and accessories for all your pet needs.",
      benefits: [
        "Natural and organic food",
        "Durable toys and enrichment",
        "Comfortable bedding",
        "Training tools",
        "Eco-friendly products"
      ],
      link: "/products/all",
      image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-pet-lightTeal to-pet-lightBlue py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-pet-navy mb-6">
                Comprehensive Services for Your Furry Friends
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700">
                From grooming to health check-ups, we provide everything your pet needs to live their happiest, healthiest life.
              </p>
              <Button asChild className="bg-pet-teal hover:bg-pet-teal/80 text-white">
                <Link to="#services-list">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section id="services-list" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pet-navy">
              Our Services
            </h2>

            <div className="space-y-16">
              {services.map((service, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 ${index % 2 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="rounded-lg overflow-hidden h-64 md:h-80">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-pet-navy">{service.title}</h3>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-fit">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours and Booking */}
        <section className="py-16 bg-pet-lightBlue/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-pet-teal mr-3" />
                  <h2 className="text-2xl md:text-3xl font-semibold text-pet-navy">Business Hours</h2>
                </div>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between"><span>Monday - Friday:</span> <span>9:00 AM - 7:00 PM</span></p>
                  <p className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday:</span> <span>11:00 AM - 4:00 PM</span></p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  * Hours may vary on holidays. Please call ahead to confirm.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-pet-orange mr-3" />
                  <h2 className="text-2xl md:text-3xl font-semibold text-pet-navy">Book a Service</h2>
                </div>
                <p className="text-gray-700 mb-6">
                  Ready to schedule a service for your pet? Book online or call us to make an appointment.
                </p>
                <div className="space-x-4">
                  <Button className="bg-pet-teal hover:bg-pet-teal/80 text-white">
                    Book Online
                  </Button>
                  <Button variant="outline" className="border-pet-teal text-pet-teal hover:bg-pet-teal/10">
                    Call: (555) 123-4567
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
