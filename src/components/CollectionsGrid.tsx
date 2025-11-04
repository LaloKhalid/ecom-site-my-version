// src/components/CollectionsGrid.tsx
import React from 'react';
import { Collection } from '@/type/api';

interface CollectionsGridProps {
  collections: Collection[];
}

const CollectionsGrid: React.FC<CollectionsGridProps> = ({ collections }) => {
  if (!collections || collections.length === 0) {
    return <p className="text-center py-8">No collections available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8">
      {collections.map((collection) => (
        <div key={collection.id} className="border rounded p-4 flex flex-col items-center">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h3 className="font-semibold text-lg">{collection.name}</h3>
          <p className="text-gray-600">{collection.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CollectionsGrid;
