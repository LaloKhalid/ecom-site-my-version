import React from 'react';
import { Product } from '@/type/api';
import Image from 'next/image';


interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => {
        const mainImage = product.images[0];
        return (
          <div key={product.id} className="border rounded p-4 flex flex-col items-center">
            <Image
  src={product.images[0]?.url ?? '/placeholder.png'}
  alt={product.images[0]?.alt ?? product.title}
  width={400}   // adjust width
  height={300}  // adjust height
  className="w-full h-48 object-cover mb-4"
/>

            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-700">{product.price.amount} {product.price.currency}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
