
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16">
          <div className="text-center py-16">
            <h2 className="text-3xl font-bold mb-6">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products/all">
              <Button className="bg-pet-purple hover:bg-pet-blue">
                Browse Products
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cart.map((item) => (
              <div key={item.id} className="flex border-b py-4">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-sm">${item.price.toFixed(2)} each</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                      className="border rounded-l px-2"
                    >
                      -
                    </button>
                    <span className="border-t border-b px-3">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                      className="border rounded-r px-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Items ({cart.length}):</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-bold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <Button className="w-full mt-4 bg-pet-purple hover:bg-pet-blue">
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
