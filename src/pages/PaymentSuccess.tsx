
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PaymentSuccess = () => {
  // Generate a random order number
  const orderNumber = `PET-${Math.floor(100000 + Math.random() * 900000)}`;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-8 mx-auto w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Payment Successful!</h2>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Thank you for your purchase. We have received your payment and will process your order soon.
          </p>
          <p className="font-medium mb-8">
            Order Number: <span className="text-pet-purple">{orderNumber}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="outline" className="min-w-[150px]">Return Home</Button>
            </Link>
            <Link to="/products/all">
              <Button className="bg-pet-purple hover:bg-pet-blue min-w-[150px]">Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
