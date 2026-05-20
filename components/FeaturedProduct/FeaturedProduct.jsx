import "@/app/globals.css";
import "./FeaturedProduct.css";
import girl_with_headphone_image from "@/assets/girl_with_headphone_image.png";
import girl_with_earphone_image from "@/assets/girl_with_earphone_image.png";
import boy_with_laptop_image from "@/assets/boy_with_laptop_image.png";
import redirect_icon from "@/assets/redirect_icon.svg";
import Image from "next/image";

const FeaturedProduct = () => {
  const products = [
    {
      id: 1,
      image: girl_with_headphone_image,
      title: "Unparalleled Sound",
      description: "xperience crystal-clear audio with premium headphones.",
    },
    {
      id: 2,
      image: girl_with_earphone_image,
      title: "Stay Connected",
      description: "Compact and stylish earphones for every occasion.",
    },
    {
      id: 3,
      image: boy_with_laptop_image,
      title: "Power in Every Pixel",
      description: "Shop the latest laptops for work, gaming, and more.",
    },
  ];

  return (
    <div className="container">
      <div className="featured-product">
        <div className="featured-header">
          <p className="featured-title">Featured Products</p>
          <div className="title-underline"></div>
        </div>

        <div className="products-grid">
          {products.map(({ id, image, title, description }) => (
            <div key={id} className="product-card">
              <Image src={image} alt={title} className="product-image" />
              <div className="product-overlay">
                <p className="product-title">{title}</p>
                <p className="product-description">{description}</p>
                <button className="buy-button">
                  Buy now
                  <Image
                    className="button-icon"
                    src={redirect_icon}
                    alt="Redirect Icon"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
