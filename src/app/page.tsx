// src/app/page.tsx
import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import SliderOne from '@/components/Slider/SliderOne'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

import ProductsGrid from '@/components/ProductsGrid'
import CollectionsGrid from '@/components/CollectionsGrid'
import { getProducts, getCollections } from '@/lib/api'

interface SearchParams {
  productCount?: string
  collectionCount?: string
}

// This is the root homepage
export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  // Parse query parameters; fallback to 4 if not provided
  const productCount = Math.min(Number(searchParams.productCount ?? 4), 20)
  const collectionCount = Math.min(Number(searchParams.collectionCount ?? 4), 20)

  // Fetch products and collections concurrently
  const [products, collections] = await Promise.all([
    getProducts(productCount),
    getCollections(collectionCount),
  ])

  return (
    <>
      {/* Header */}
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className='relative w-full'>
        <MenuOne props="bg-transparent" />
        <SliderOne />
      </div>

      {/* Dynamic Products Section */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Products</h2>
        <ProductsGrid products={products} />
      </section>

      {/* Dynamic Collections Section */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Collections</h2>
        <CollectionsGrid collections={collections} />
      </section>

      {/* Existing homepage components */}
      <Brand />
      <Footer />
      <ModalNewsletter />
    </>
  )
}
