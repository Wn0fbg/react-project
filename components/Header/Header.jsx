"use client";
import "@/app/globals.css";
import "./Header.css";
import logo from "@/assets/logo.svg";
import searc_icon from "@/assets/search_icon.svg";
import user_icon from "@/assets/user_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname(); // получаем текущий путь
  const menuRef = useRef();

  // Определяем активный пункт меню на основе текущего URL
  const getActiveMenu = () => {
    if (pathname === "/") return "home";
    if (pathname === "/shop") return "shop";
    if (pathname === "/about") return "about";
    if (pathname === "/contact") return "contact";
    if (pathname === "/profile") return "profile";
    return "home";
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <Link href="/">
            <Image src={logo} alt="logo" className="logo" />
          </Link>
          <ul ref={menuRef} className="header__menu-center">
            <li>
              <Link
                href="/"
                className={`header__menu-link ${getActiveMenu() === "home" ? "active" : ""}`}
              >
                Home
                {getActiveMenu() === "home" && <hr />}
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`header__menu-link ${getActiveMenu() === "shop" ? "active" : ""}`}
              >
                Shop
                {getActiveMenu() === "shop" && <hr />}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`header__menu-link ${getActiveMenu() === "about" ? "active" : ""}`}
              >
                About us
                {getActiveMenu() === "about" && <hr />}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`header__menu-link ${getActiveMenu() === "contact" ? "active" : ""}`}
              >
                Contact
                {getActiveMenu() === "contact" && <hr />}
              </Link>
            </li>
          </ul>

          <div className="header__menu-right">
            <Image src={searc_icon} alt="search" className="header__search" />
            <Link href="/profile" className="profile-link">
              <button className="profile-btn">
                <Image src={user_icon} alt="profile" className="profile-img" />
                Account
                {getActiveMenu() === "profile"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
