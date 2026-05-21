import "@/app/globals.css";
import "./ProductsHome.css";
import Image from "next/image";
import asus_laptop_image from "@/assets/products/asus_laptop_image.png";
import bose__headphone_image from "@/assets/products/bose_headphone_image.png";
import cannon_camera_image from "@/assets/products/cannon_camera_image.png";
import sony_airbuds_image from "@/assets/products/sony_airbuds_image.png";
import venu_watch_image from "@/assets/products/venu_watch_image.png";
import heart_icon from "@/assets/heart_icon.svg";

const ProductsHome = () => {
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

  return (
    <div className="products-container">
      <div className="container">
        <div className="products">
          <p className="products-title">Popular products</p>
        </div>
        <div className="products-item">
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
                <p className="product__card-title">{title}</p>
                <p className="product__card-desc">{description}</p>
                <div className="product__card-bottom">
                  <p className="product__card-price">${price}</p>
                  <button className="product__card-btn">Buy now</button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="see-more">See more</button>
      </div>
    </div>
  );
};

export default ProductsHome;
