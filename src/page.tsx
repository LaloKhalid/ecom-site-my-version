'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import TopNavOne from '@/components/Header/TopNav/TopNavOne';
import MenuOne from '@/components/Header/Menu/MenuOne';
import SliderOne from '@/components/Slider/SliderOne';
import WhatNewOne from '@/components/Home1/WhatNewOne';
import ProductsGrid from '@/components/ProductsGrid';
import CollectionsGrid from '@/components/CollectionsGrid';
import Banner from '@/components/Home1/Banner';
import Benefit from '@/components/Home1/Benefit';
import Testimonial from '@/components/Home1/Testimonial';
import Instagram from '@/components/Home1/Instagram';
import Brand from '@/components/Home1/Brand';
import Footer from '@/components/Footer/Footer';
import ModalNewsletter from '@/components/Modal/ModalNewsletter';

import { getProducts, getCollections } from '@/lib/api';
import { Product, Collection } from '@/type/api';
import testimonialData from '@/data/Testimonial.json';

export default function Home() {
  const searchParams = useSearchParams();
  const productCount = parseInt(searchParams.get('productCount') || '4', 10);
  const collectionCount = parseInt(searchParams.get('collectionCount') || '3', 10);

  const [products, setProducts] = useState<Product[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts(productCount);
      const fetchedCollections = await getCollections(collectionCount);

      setProducts(fetchedProducts);
      setCollections(fetchedCollections);
    }

    fetchData();
  }, [productCount, collectionCount]);

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
