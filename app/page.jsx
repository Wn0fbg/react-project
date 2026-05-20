"use client";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeaderSlider from "@/components/HeaderSlider/HeaderSlider";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import Banner from "@/components/Banner/Banner";
import FeaturedProduct from "@/components/FeaturedProduct/FeaturedProduct";
import ProductsHome from "@/components/ProductsHome/ProductsHome";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main">
        <HeaderSlider />
        <ProductsHome />
        <FeaturedProduct />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
