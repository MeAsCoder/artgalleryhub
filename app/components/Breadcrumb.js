// app/components/Breadcrumb.js

import Link from 'next/link';

const Breadcrumb = ({ productName }) => {
  return (
    <nav className="text-gray-600 mb-4 mt-5">
      {/* Breadcrumb Home link */}
      <Link href="/" className="hover:text-blue-500 font-medium text-gray-500 transition duration-300 ease-in-out">
        Home
      </Link>
      
      {/* Arrow separator */}
      <span className="mx-2 text-gray-400">→</span>

      {/* Breadcrumb Products link */}
      <Link href="/products" className="hover:text-blue-500 font-medium text-gray-500 transition duration-300 ease-in-out">
        Products
      </Link>

      {/* Arrow separator */}
      <span className="mx-2 text-gray-400">→</span>

      {/* Current product name, styled as active */}
      <span className="font-semibold text-rose-300">{productName}</span>
    </nav>
  );
};

export default Breadcrumb;
