import "./Shop.css";
import "@/app/globals.css";

const Shop = () => {
  return (
    <div className="container">
      <div className="products__container"></div>
      <div className="filters">
        <h2 className="filters__title">Filters</h2>
      </div>
      <div className="products"></div>
    </div>
  );
};

export default Shop;
