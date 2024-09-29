// pages/cart.js

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Basic Tee",
      color: "Sienna",
      size: "Large",
      price: 32.00,
      quantity: 1,
      status: "In stock",
      image: "path/to/sienna-basic-tee.jpg" // Replace with actual image path
    },
    {
      id: 2,
      name: "Basic Tee",
      color: "Black",
      size: "Large",
      price: 32.00,
      quantity: 1,
      status: "Ships in 3–4 weeks",
      image: "path/to/black-basic-tee.jpg" // Replace with actual image path
    },
    {
      id: 3,
      name: "Nomad Tumbler",
      color: "White",
      price: 35.00,
      quantity: 1,
      status: "In stock",
      image: "path/to/white-nomad-tumbler.jpg" // Replace with actual image path
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-rose-400">Shopping Cart</h1>
        <h2 className="text-xl mb-4">Items in your shopping cart</h2>

        <div className="space-y-8">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center border-b pb-4 mb-4">
              <img
                src={item.image}
                alt={`${item.name} in ${item.color}`}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{`Front of men's ${item.name} in ${item.color}.`}</h3>
                <p>{item.name}</p>
                <p>{item.color}</p>
                <p>{item.size ? item.size : ''}</p>
                <p className="font-bold">${item.price.toFixed(2)}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2">Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${item.id}`}
                      min="1"
                      value={item.quantity}
                      className="w-16 border border-gray-300 rounded p-1 text-center"
                    />
                  </div>
                  <button className="text-red-600 hover:underline ml-4">Remove</button>
                </div>
                <p className="text-sm text-gray-500">{item.status}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <button className="btn btn-primary">Proceed to Checkout</button>
          <p className="font-bold">Total: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
