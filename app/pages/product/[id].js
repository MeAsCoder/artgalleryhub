// pages/product/[id].js

import { useRouter } from 'next/router';

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch the product details using the id
  // Assume fetchProductDetails is a function to fetch product data
  // const product = fetchProductDetails(id);

  return (
    <div>
      <h1>Product Details for {id}</h1>
      {/* Render product details here */}
    </div>
  );
};

export default ProductDetails;
