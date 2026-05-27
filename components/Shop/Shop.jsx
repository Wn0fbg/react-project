import "./Shop.css";
import "@/app/globals.css";
import { Search, Sparkle, Star, Filter, TestTube } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories } from "@/app/src/categories";

import Image from "next/image";
import asus_laptop_image from "@/assets/products/asus_laptop_image.png";
import bose__headphone_image from "@/assets/products/bose_headphone_image.png";
import cannon_camera_image from "@/assets/products/cannon_camera_image.png";
import sony_airbuds_image from "@/assets/products/sony_airbuds_image.png";
import venu_watch_image from "@/assets/products/venu_watch_image.png";
import heart_icon from "@/assets/heart_icon.svg";

const Shop = () => {
  const products = [
    {
      id: 1,
      image: asus_laptop_image,
      title: "product-1",
      description: "Unparalleled Sound",
      price: 10,
    },
    {
      id: 2,
      image: bose__headphone_image,
      title: "product-2",
      description: "Stay Connected",
      price: 10,
    },
    {
      id: 3,
      image: cannon_camera_image,
      title: "product-3",
      description: "Power in Every Pixel",
      price: 10,
    },
    {
      id: 4,
      image: sony_airbuds_image,
      title: "product-4",
      description: "Power in Every Pixel",
      price: 10,
    },
    {
      id: 5,
      image: venu_watch_image,
      title: "product-5",
      description: "Power in Every Pixel",
      price: 10,
    },
    {
      id: 6,
      image: asus_laptop_image,
      title: "product-6",
      description: "Unparalleled Sound",
      price: 10,
    },
    {
      id: 7,
      image: bose__headphone_image,
      title: "product-7",
      description: "Stay Connected",
      price: 10,
    },
    {
      id: 8,
      image: cannon_camera_image,
      title: "product-8",
      description: "Power in Every Pixel",
      price: 10,
    },
    {
      id: 9,
      image: sony_airbuds_image,
      title: "product-9",
      description: "Power in Every Pixel",
      price: 10,
    },
    {
      id: 10,
      image: venu_watch_image,
      title: "product-10",
      description: "Power in Every Pixel",
      price: 10,
    },
  ];

  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("search");
  const searchedCategory = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState(searchTerm || "");
  const [selectedCategory, setSelectedCategory] = useState(
    searchedCategory || "",
  );

  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [availability, setAvailability] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container">
      <div className="shop-container">
        <div className="filters-container">
          <div className="filters">
            <h2 className="filters__title">Filters</h2>
            <div className="filtets__item">
              <h3 className="section-title">Price range</h3>
              <input
                type="range"
                min="0"
                max="100"
                className="filters__price-input"
              />
              <div className="filters__price-range">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>

            <div className="filters__item">
              <h3 className="section-title">Rating</h3>
              <div className="filter-item">
                {[4, 3, 2, 1].map((rating) => {
                  return (
                    <button
                      key={rating}
                      onClick={() =>
                        setSelectedRating(
                          selectedRating === rating ? 0 : rating,
                        )
                      }
                      className={`rating-button ${selectedRating === rating ? "active" : ""}`}
                    >
                      {[...Array(5)].map((_, i) => {
                        return (
                          <Star
                            key={i}
                            className={`star-icon ${i < rating ? "filled" : "empty"}`}
                          />
                        );
                      })}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="filters__item">
              <h3 className="section-title">Availability</h3>
              <div className="filter-item">
                {["in-stock", "limited", "out-of-stock"].map((status) => {
                  return (
                    <button
                      key={status}
                      onClick={() =>
                        setAvailability(availability === status ? "" : status)
                      }
                      className={`rating-button ${availability === status ? "active" : ""}`}
                    >
                      {status === "in-stock"
                        ? "In Stock"
                        : status === "limited"
                          ? "Limited stock"
                          : "Out of stock"}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="filters__item">
              <h3 className="section-title">Category</h3>
              <div className="filter-item">
                <button
                  onClick={() => setSelectedCategory("")}
                  className={`rating-button ${!selectedCategory ? "active" : ""}`}
                >
                  All categories
                </button>
                {categories.map((category) => {
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`rating-button ${selectedCategory === category.name ? "active" : ""}`}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="products-container">
          <div className="search-wrapper">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search products.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="products-list">
            {products.map(({ id, image, title, description, price }) => {
              return (
                <div key={id} className="product_card">
                  <div className="product__card-wraper">
                    <Image
                      src={image}
                      alt={title}
                      className="product__card-img"
                    />
                    <button className="favorite-button">
                      <Image
                        className="heart-image"
                        src={heart_icon}
                        alt="heart icon"
                      />
                    </button>
                  </div>
                  <p className="products-title">{title}</p>
                  <p className="product__card-desc">{description}</p>
                  <div className="product__card-bottom">
                    <p className="product__card-price">${price}</p>
                    <button className="product__card-btn">Buy now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
