"use client";
import "@/app/globals.css";
import "./Header.css";
import logo from "@/assets/logo.svg";
import searc_icon from "@/assets/search_icon.svg";
import user_icon from "@/assets/user_icon.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Image src={logo} alt="logo" className="logo" />
          <div className="header__menu-center">
            <Link href="/" className="header__menu-link">
              Home
            </Link>
            <Link href="/" className="header__menu-link">
              Shop
            </Link>
            <Link href="/" className="header__menu-link">
              About us
            </Link>
            <Link href="/" className="header__menu-link">
              Contact
            </Link>
            <button className="seller-btn">Seller Dashboard</button>
          </div>

          <div className="header__menu-right">
            <Image src={searc_icon} alt="search" className="header__search" />
            <button className="profile-btn">
              <Image src={user_icon} alt="profile" className="profile-img" />
              Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
