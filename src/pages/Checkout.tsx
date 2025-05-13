
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/sonner";

const PaymentMethod = {
  CREDIT_CARD: "credit_card",
  PAYPAL: "paypal",
  APPLE_PAY: "apple_pay"
};

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethod.CREDIT_CARD);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      toast.success("Payment successful! Your order has been placed.");
      navigate("/payment-success");
    }, 2000);
  };

  if (cart.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Checkout</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit}>
              {/* Shipping Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="(123) 456-7890" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St" required />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="New York" required />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input id="zipCode" placeholder="10001" required />
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="credit-card"
                      name="payment-method"
                      checked={paymentMethod === PaymentMethod.CREDIT_CARD}
                      onChange={() => setPaymentMethod(PaymentMethod.CREDIT_CARD)} 
                      className="mr-2"
                    />
                    <Label htmlFor="credit-card" className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      Credit Card
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="paypal"
                      name="payment-method"
                      checked={paymentMethod === PaymentMethod.PAYPAL}
                      onChange={() => setPaymentMethod(PaymentMethod.PAYPAL)}
                      className="mr-2"
                    />
                    <Label htmlFor="paypal" className="flex items-center">
                      <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 5.407a.642.642 0 0 1 .634-.546h4.634c3.032 0 5.175.882 6.357 2.611.53.77.886 1.65 1.053 2.612.176 1.013.134 2.205-.12 3.51-.398 2.055-1.15 3.795-2.23 5.16-1.076 1.359-2.476 2.302-4.15 2.8-1.64.493-3.546.646-5.681.454-1.732-.16-2.855-.748-3.365-1.76v-.001z" />
                        <path d="M23.594 7.935a8.17 8.17 0 0 0-.599-1.62c-1.248-2.56-4.177-3.898-8.693-3.898h-4.634a1.606 1.606 0 0 0-1.587 1.368l-3.107 15.19a1.602 1.602 0 0 0 1.585 1.84h4.606c1.88 0 3.375-.427 4.441-1.271.306-.242.593-.52.859-.832a8.74 8.74 0 0 0 1.874-3.513c.2-.834.298-1.76.298-2.76 0-1.797-.36-3.158-1.043-4.504z" />
                      </svg>
                      PayPal
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <input 
                      type="radio" 
                      id="apple-pay"
                      name="payment-method"
                      checked={paymentMethod === PaymentMethod.APPLE_PAY}
                      onChange={() => setPaymentMethod(PaymentMethod.APPLE_PAY)}
                      className="mr-2"
                    />
                    <Label htmlFor="apple-pay" className="flex items-center">
                      <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.5743 7.17105C16.2123 7.17105 15.2963 6.91905 14.3973 6.91905C13.4983 6.91905 12.5823 7.17105 11.2203 7.17105C9.85828 7.17105 8.69428 5.99905 8.69428 4.65905C8.69428 3.31905 9.85828 2.14705 11.2203 2.14705C12.5823 2.14705 13.4983 2.39905 14.3973 2.39905C15.2963 2.39905 16.2123 2.14705 17.5743 2.14705C18.9363 2.14705 20.1003 3.31905 20.1003 4.65905C20.1003 5.99905 18.9363 7.17105 17.5743 7.17105Z" />
                        <path d="M20.1003 4.65906C20.1003 3.31906 18.9363 2.14706 17.5743 2.14706C16.2123 2.14706 15.2963 2.39906 14.3973 2.39906C13.4983 2.39906 12.5823 2.14706 11.2203 2.14706C9.85828 2.14706 8.69428 3.31906 8.69428 4.65906C8.69428 5.99906 9.85828 7.17106 11.2203 7.17106C12.5823 7.17106 13.4983 6.91906 14.3973 6.91906C15.2963 6.91906 16.2123 7.17106 17.5743 7.17106C18.9363 7.17106 20.1003 5.99906 20.1003 4.65906Z" />
                        <path d="M5.33334 21.8531H15.6667C16.5833 21.8531 17.5 21.1398 17.5 20.0264C17.5 19.0264 16.9167 18.2831 15.9167 18.0464L14.0833 17.1398C13.5833 16.9031 13.5 16.4831 13.5 16.0631V14.4431C14.75 13.7298 15.5833 12.4031 15.5833 10.7298C15.5833 8.35645 13.5833 6.3731 11.5 6.3731C9.41668 6.3731 7.41668 8.35645 7.41668 10.7298C7.41668 12.3148 8.25001 13.6465 9.50001 14.4431V16.0631C9.50001 16.4831 9.41668 16.9031 8.91668 17.1398L7.08334 18.0464C6.08334 18.2831 5.50001 19.0264 5.50001 20.0264C5.33334 21.2231 4.83334 21.8531 5.33334 21.8531Z" />
                      </svg>
                      Apple Pay
                    </Label>
                  </div>
                </div>

                {paymentMethod === PaymentMethod.CREDIT_CARD && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" required />
                    </div>
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expDate">Expiration Date</Label>
                        <Input id="expDate" placeholder="MM/YY" required />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-4 flex items-center">
                <Checkbox id="saveInfo" />
                <Label htmlFor="saveInfo" className="ml-2">
                  Save my information for next time
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-pet-purple hover:bg-pet-blue" 
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
            </form>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            
            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.title} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
