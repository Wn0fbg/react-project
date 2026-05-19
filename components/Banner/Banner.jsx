import "@/app/globals.css";
import "./Banner.css";
import Image from "next/image";
import jbl_soundbox_image from "@/assets/jbl_soundbox_image.png";
import md_controller_image from "@/assets/sm_controller_image.png";
import sm_controller_image from "@/assets/sm_controller_image.png";
import arrow_icon_white from "@/assets/arrow_icon_white.svg";

const Banner = () => {
  return (
    <div className="container">
      <div className="promo-card">
        <Image
          className="promo-card__image-left"
          src={jbl_soundbox_image}
          alt="jbl_soundbox_image"
        />

        <div className="promo-card__content">
          <h2 className="promo-card__title">Level Up Your Gaming Experience</h2>
          <p className="promo-card__description">
            From immersive sound to precise controls—everything you need to win
          </p>
          <button className="promo-card__button">
            Buy now
            <Image
              className="promo-card__button-icon"
              src={arrow_icon_white}
              alt="arrow_icon_white"
            />
          </button>
        </div>

        <Image
          className="promo-card__image-right--desktop"
          src={md_controller_image}
          alt="md_controller_image"
        />
        <Image
          className="promo-card__image-right--mobile"
          src={sm_controller_image}
          alt="sm_controller_image"
        />
      </div>
    </div>
  );
};

export default Banner;
