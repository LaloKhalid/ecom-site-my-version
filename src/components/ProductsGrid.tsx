// src/components/ProductsGrid.tsx
import React from 'react';
import { Product } from '@/type/api';

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <p className="text-center py-8">No products available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
      {products.map((product) => (
        <div key={product.id} className="border rounded p-4 flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsGrid;
