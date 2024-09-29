import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const CategoryDetails = ({ params }) => {
  const router = useRouter();
  const { categoryId } = params; // Use categoryId instead of id
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await fetch(`http://localhost:9937/api/product/category/${categoryId}`); // Use http if necessary
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message); // Set error message
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    if (categoryId) {
      fetchProductsByCategory();
    }
  }, [categoryId]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Category: {categoryId}</h1>

      {loading && <p className="text-center">Loading...</p>} {/* Loading state */}

      {error && <p className="text-center text-red-500">{error}</p>} {/* Error message */}

      {products.length > 0 ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          className="swiper-container"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <article className="p-4 bg-white shadow rounded-lg">
                <img
                  src={product.productImageUrl}
                  alt={product.productName}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className="text-lg font-semibold mt-4">{product.productName}</h2>
                <p className="text-gray-600 mt-2">${product.productPrice}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        !loading && <p className="text-center text-gray-500">No products available for this category.</p>
      )}
    </div>
  );
};

export default CategoryDetails;
