import { useEffect, useState } from "react";
import "@/app/globals.css";
import "./HeaderSlider.css";
import header_headphone_image from "@/assets/header_headphone_image.png";
import header_playstation_image from "@/assets/header_playstation_image.png";
import header_macbook_image from "@/assets/header_macbook_image.png";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
      offer: "Limited Time Offer 30% Off",
      buttonText1: "Buy now",
      buttonText2: "Find more",
      imgSrc: header_headphone_image, // Используем импортированную переменную
    },
    {
      id: 2,
      title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
      offer: "Hurry up only few lefts!",
      buttonText1: "Shop Now",
      buttonText2: "Explore Deals",
      imgSrc: header_playstation_image,
    },
    {
      id: 3,
      title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
      offer: "Exclusive Deal 40% Off",
      buttonText1: "Order Now",
      buttonText2: "Learn More",
      imgSrc: header_macbook_image,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSliderChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
      <div className="slider-container">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {sliderData.map((slide, index) => (
            <div key={slide.id} className="slide">
              <div className="slide-content">
                <p className="offer-text">{slide.offer}</p>
                <h1 className="slide-title">{slide.title}</h1>
                <div className="button-group">
                  <button className="btn-primary">{slide.buttonText1}</button>
                  <button className="btn-secondary">{slide.buttonText2}</button>
                </div>
              </div>
              <div className="slide-image">
                <Image
                  className="slide-img"
                  src={slide.imgSrc} // Теперь здесь правильный путь
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="slider-dots">
          {sliderData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSliderChange(index)}
              className={`dot ${currentSlide === index ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSlider;
