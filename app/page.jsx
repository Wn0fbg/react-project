"use client";
import HeaderSlider from "@/components/HeaderSlider/HeaderSlider";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Banner from "@/components/Banner/Banner";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import ProductsHome from "@/components/ProductsHome/ProductsHome";

export default function Home() {
  return (
    <>
      <div className="main">
        <HeaderSlider />
        <ProductsHome />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
    </>
  );
}
