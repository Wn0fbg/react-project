import "./Shop.css";
import "@/app/globals.css";
import { Search, Sparkle, Star, Filter, TestTube } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { categories } from "@/app/src/categories";

const Shop = () => {
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("search");
  const searchedCategory = searchParams.get("category");

  const [searchQuery] = useState(searchTerm || "");
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
      </div>
      <div className="products"></div>
    </div>
  );
};

export default Shop;
