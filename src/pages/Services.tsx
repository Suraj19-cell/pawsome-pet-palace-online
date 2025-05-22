
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Clock, Calendar, Heart, Scissors, ShoppingBag, Award, Truck, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
      image: "https://images.pexels.com/photos/6816031/pexels-photo-6816031.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      image: "https://images.pexels.com/photos/6235688/pexels-photo-6235688.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      image: "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      pet: "Max",
      image: "https://images.pexels.com/photos/4588435/pexels-photo-4588435.jpeg?auto=compress&cs=tinysrgb&w=800",
      text: "The grooming service was excellent! My dog Max looks amazing and the staff was so gentle with him.",
      rating: 5
    },
    {
      name: "Michael Brown",
      pet: "Luna",
      image: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=800",
      text: "I've been taking Luna for regular health check-ups and the care she receives is outstanding.",
      rating: 5
    },
    {
      name: "Emily Davis",
      pet: "Oliver",
      image: "https://images.pexels.com/photos/5731824/pexels-photo-5731824.jpeg?auto=compress&cs=tinysrgb&w=800",
      text: "The products available in the store are high-quality and my cat Oliver loves his new toys!",
      rating: 4
    }
  ];

  const featuredArticles = [
    {
      title: "Tips for New Pet Parents",
      excerpt: "Essential advice for those welcoming a new furry friend into their home.",
      image: "https://images.pexels.com/photos/5731827/pexels-photo-5731827.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Summer Pet Care Guide",
      excerpt: "Keep your pets safe and comfortable during the hot summer months.",
      image: "https://images.pexels.com/photos/6131004/pexels-photo-6131004.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Understanding Pet Nutrition",
      excerpt: "Learn about proper diet and nutrition for different types of pets and life stages.",
      image: "https://images.pexels.com/photos/5731863/pexels-photo-5731863.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        
        {/* Why Choose Our Services */}
        <section className="py-16 bg-pet-lightTeal/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-pet-navy">
              Why Choose Our Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-pet-lightBlue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-pet-blue" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Certified Professionals</h3>
                <p className="text-gray-600">Our staff includes certified veterinarians, groomers, and pet care specialists.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-pet-lightOrange rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-pet-orange" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Premium Quality</h3>
                <p className="text-gray-600">We use only high-quality products and equipment for all our services.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-pet-lightPurple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-pet-purple" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Personalized Care</h3>
                <p className="text-gray-600">Every pet receives customized attention based on their specific needs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-pet-lightGreen rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-pet-green" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Home Delivery</h3>
                <p className="text-gray-600">Get pet supplies delivered right to your doorstep with our delivery service.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Customer Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-pet-navy">
              What Pet Parents Say
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Hear from our happy customers about their experiences with our services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">Pet: {testimonial.pet}</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{testimonial.text}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-pet-teal text-pet-teal hover:bg-pet-teal/10">
                <Link to="/testimonials">
                  View All Testimonials
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Articles */}
        <section className="py-16 bg-pet-lightBlue/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-pet-navy">
              Pet Care Resources
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              Helpful articles and guides to help you take better care of your pets
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Link to="#" className="text-pet-teal font-medium hover:text-pet-blue">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hours and Booking */}
        <section className="py-16 bg-white">
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
                  <Button asChild className="bg-pet-teal hover:bg-pet-teal/80 text-white">
                    <Link to="/grooming">Book Online</Link>
                  </Button>
                  <Button variant="outline" className="border-pet-teal text-pet-teal hover:bg-pet-teal/10">
                    Call: (555) 123-4567
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-pet-lightTeal/10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-pet-navy">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "How often should I bring my pet for grooming?",
                  a: "The frequency depends on your pet's breed, coat type, and lifestyle. Generally, most dogs benefit from professional grooming every 4-8 weeks, while cats may need less frequent grooming sessions."
                },
                {
                  q: "Do you offer services for senior pets?",
                  a: "Yes, we provide specialized care for senior pets, including gentler handling techniques, accommodations for mobility issues, and health monitoring during grooming sessions."
                },
                {
                  q: "What vaccinations are required for services?",
                  a: "For the safety of all pets, we require current rabies vaccination, as well as DHPP for dogs and FVRCP for cats. Please bring vaccination records to your appointment."
                },
                {
                  q: "Can I stay with my pet during services?",
                  a: "For most services, we ask that owners drop off their pets to minimize anxiety and distractions. However, we can make accommodations for special cases - please discuss with our staff."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold text-lg mb-2 text-pet-navy">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <p className="mb-4 text-gray-600">
                Have more questions? We're happy to help!
              </p>
              <Button className="bg-pet-purple hover:bg-pet-purple/80">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
