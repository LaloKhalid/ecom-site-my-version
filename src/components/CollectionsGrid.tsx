import React from 'react';
import { Collection } from '@/type/api';
import Image from 'next/image';

interface CollectionsGridProps {
  collections: Collection[];
}

const CollectionsGrid: React.FC<CollectionsGridProps> = ({ collections }) => {
  if (!collections || collections.length === 0) {
    return <p>No collections found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {collections.map((collection) => (
        <div
          key={collection.id}
          className="border rounded p-4 flex flex-col items-center"
        >
          <Image
  src={collection.heroImage?.url ?? '/placeholder.png'}
  alt={collection.heroImage?.alt ?? collection.title}
  width={400}  // choose appropriate width
  height={300} // choose appropriate height
  className="w-full h-48 object-cover mb-4"
/>
          <h3 className="text-lg font-semibold">{collection.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default CollectionsGrid;
