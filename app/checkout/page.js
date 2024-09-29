"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import { useCart } from '../context/CartContext';
import { Router, useRouter } from 'next/navigation'; 




const Checkout = () => {

    const { cart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [loading, setLoading] = useState(false)
    const router = useRouter();


    
    useEffect(() => {
        // Simulating a loading delay
        if (cart.length > 0) {
          setLoading(false);
        }
      }, [cart]);
    
      if (loading) {
        return <p>Loading...</p>; // Placeholder or loading state
      }
    

     // Calculate subtotal and total based on cart items
  const calculateTotals = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const taxes = subtotal * 0.16;
    const shippingCost = subtotal * 0.05; // Fixed shipping cost, adjust as necessary
    const total = subtotal + shippingCost + taxes;
    return { subtotal, shippingCost, total,taxes };
  };

  const { subtotal, shippingCost, total,taxes } = calculateTotals();

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="flex">
        {/* Billing Address Section */}
        <div className="w-2/3 pr-4">
          {/* Contact Information */}
          <section className="mb-6 bg-neutral-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </section>

          {/* Shipping Information */}
          <section className="mb-6 bg-neutral-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-1/2 border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-1/2 border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Company"
              className="w-full border border-gray-300 p-2 rounded mb-4"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 p-2 rounded mb-4"
              required
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc."
              className="w-full border border-gray-300 p-2 rounded mb-4"
            />
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="w-1/2 border border-gray-300 p-2 rounded"
                required
              />
              <select className="w-1/2 border border-gray-300 p-2 rounded" required>
                <option value="">Select Country</option>
                <option value="us">United States</option>
                {/* Add other countries as needed */}
              </select>
            </div>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="State / Province"
                className="w-1/2 border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="Postal code"
                className="w-1/2 border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 p-2 rounded mb-4"
              required
            />
          </section>

          {/* Delivery Method */}
          <section className="mb-6 bg-neutral-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
            <div className="flex justify-between mb-4">
              <div>
                <input type="radio" id="standard" name="delivery" value="standard" className="mr-2" />
                <label htmlFor="standard">Standard (4–10 business days) - $5.00</label>
              </div>
              <div>
                <input type="radio" id="express" name="delivery" value="express" className="mr-2" />
                <label htmlFor="express">Express (2–5 business days) - $16.00</label>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="mb-6 bg-neutral-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
            <div className="flex mb-4">
              <button
                className={`flex-1 p-2 rounded ${paymentMethod === "creditCard" ? "bg-rose-400 text-white" : "bg-gray-200"} mr-2`}
                onClick={() => setPaymentMethod("creditCard")}
              >
                Credit Card
              </button>
              <button
                className={`flex-1 p-2 rounded ${paymentMethod === "paypal" ? "bg-rose-400 text-white" : "bg-gray-200"} mr-2`}
                onClick={() => setPaymentMethod("paypal")}
              >
                PayPal
              </button>
              <button
                className={`flex-1 p-2 rounded ${paymentMethod === "eTransfer" ? "bg-rose-400 text-white" : "bg-gray-200"}`}
                onClick={() => setPaymentMethod("eTransfer")}
              >
                eTransfer
              </button>
            </div>
            {paymentMethod === "creditCard" && (
              <div>
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border border-gray-300 p-2 rounded mb-4"
                  required
                />
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="w-full border border-gray-300 p-2 rounded mb-4"
                  required
                />
                <div className="flex space-x-4 mb-4">
                  <input
                    type="text"
                    placeholder="Expiration Date (MM/YY)"
                    className="w-1/2 border border-gray-300 p-2 rounded"
                    required
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-1/2 border border-gray-300 p-2 rounded"
                    required
                  />
                </div>
              </div>
            )}
          </section>
        </div>

         {/* Order Summary Section */}
         <div className="w-1/3 ml-4">
          <section className="bg-neutral-200 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {cart.length > 0 ?(
            cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))):(
                <p>Your cart is empty.</p>
            )}
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
              <button className="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-200"
             onClick={() => router.push('/seller_dashboard')}
              >
                Place Order
              </button>
          
          </section>
        </div>
      </div>
    </div>
  );
};

export default Checkout;