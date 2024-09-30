// Home.js
"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { FaCheckCircle, FaHeadset,FaRegLightbulb } from 'react-icons/fa';

export default function Home() {
  const [products, setProducts] = useState([]); // Initialize state as an empty array

  useEffect(() => {
    // Fetch data from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://11d2-41-90-185-8.ngrok-free.app/api/product/allProducts");
        const data = await response.json();
        setProducts(data); // Set the fetched products array to state
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      
      <Carousel />

      <article className="text-gray-700 mt-4 mx-4 p-6 bg-gray-100 rounded-lg shadow-lg">
  <h2 className="text-2xl font-semibold text-rose-400 mb-4 text-center">Discover Our Best-Selling Art</h2>
  <p className="text-lg leading-relaxed italic text-center">
    Discover a curated collection of our best-selling art pieces, each crafted with meticulous attention to detail. 
    Our selection features high-quality, aesthetically pleasing artworks that are perfect for enhancing the ambiance of any space. 
    Whether you're looking to brighten up your living room, create a serene atmosphere in your bedroom, or find that perfect statement piece for your office, 
    we have something that will resonate with your unique style. Explore our diverse range of artistic expressions and let your walls tell a story. 
    Each piece is not just art; it's an experience waiting to be brought into your home.
  </p>
</article>



        <article className="bg-slate-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
      </article>

      <div 
        className="bg-fixed bg-center bg-cover h-[calc(100vh-4rem)] overflow-y-auto flex items-center justify-center text-white py-10"  
        style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/5/5c/Kenyan_oil_painting_01.jpg)' }}
      >
        {/* Optional content can go here */}

        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h2 className="text-3xl font-bold mb-4 text-rose-200 mt-10">Why Choose Our Art?</h2>
          <p className="text-lg text-white mb-6 flex items-start">
          <FaRegLightbulb className="text-yellow-400 mr-1" />
            We specialize in high-quality oil hand paintings, crafted with care both locally and internationally. 
            Our artworks are tailored to suit your needs, ensuring that each piece resonates with your personal style. 
            Additionally, we take orders to customize art according to your specific preferences, making each 
            creation uniquely yours.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-rose-200 mt-10">Our Process</h3>
          <ol className="list-decimal list-inside mb-6">
            <li className="flex items-center mb-2">
             
              <FaCheckCircle className="text-green-400 mr-2" />
              <span>Collaborate with Professional Artists: We work with talented artists who pour their creativity and skill into every piece.</span>
            </li>
            <li className="flex items-center mb-2">
             
              <FaCheckCircle className="text-green-400 mr-2" />
              Select the Best Art: Our team curates a selection of artworks that meet our high standards of quality and originality.
            </li>
            <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-400 mr-2" />
              Customize to Your Liking: We tailor each artwork to meet your specific requirements and preferences, ensuring a perfect match for your space.
            </li>
            <li className="flex items-center mb-2">
            <FaCheckCircle className="text-green-400 mr-2" />
              Timely Delivery: We ensure that your chosen artwork is delivered to you safely and on time.
            </li>
          </ol>

          <p className="text-lg text-white mb-6 flex items-start">
          <FaRegLightbulb className="text-yellow-400 mr-2" />
            Our commitment to quality doesn’t end with the selection process. We provide ongoing support to ensure that you are satisfied 
            with your purchase, and we are always available to assist you with any customizations or questions you may have.
          </p>

          <button className="bg-rose-400 text-white py-2 px-4 rounded hover:bg-rose-500 transition duration-300 mt-10">
            Order a Customized Art
          </button>
        </div>


      </div>


    </div>
  );
}
