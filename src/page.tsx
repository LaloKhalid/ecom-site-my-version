// src/app/page.tsx
import React from 'react';
import { getProducts, getCollections } from '@/lib/api';
import ProductsGrid from '@/components/ProductsGrid';
import CollectionsGrid from '@/components/CollectionsGrid';

import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import SliderOne from '@/components/Slider/SliderOne';
import WhatNewOne from '@/components/Home1/WhatNewOne';
import Banner from '@/components/Home1/Banner';
import Benefit from '@/components/Home1/Benefit';
import Testimonial from '@/components/Home1/Testimonial';
import Instagram from '@/components/Home1/Instagram';
import Brand from '@/components/Home1/Brand';
import Footer from '@/components/Footer/Footer';
import ModalNewsletter from '@/components/Modal/ModalNewsletter';

import productData from '@/data/Product.json';
import testimonialData from '@/data/Testimonial.json';

interface HomePageProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Home({ searchParams }: HomePageProps) {
  // Parse query parameters
  const productCount = Number(searchParams?.productCount || 8);
  const collectionCount = Number(searchParams?.collectionCount || 3);

  // Fetch products and collections
  const [products, collections] = await Promise.all([
    getProducts(productCount),
    getCollections(collectionCount),
  ]);

  return (
    <>
      <TopNavOne props="style-one bg-black" slogan="New customers save 10% with the code GET10" />
      <div id="header" className="relative w-full">
        <MenuOne props="bg-transparent" />
        <SliderOne />
      </div>

      {/* Products Section */}
      <WhatNewOne data={products} start={0} limit={productCount} />
      <ProductsGrid products={products} />

      {/* Collections Section */}
      <CollectionsGrid collections={collections} />

      <Banner />
      <Benefit props="md:py-20 py-10" />
      <Testimonial data={testimonialData} limit={6} />
      <Instagram />
      <Brand />
      <Footer />
      <ModalNewsletter />
    </>
  );
}
