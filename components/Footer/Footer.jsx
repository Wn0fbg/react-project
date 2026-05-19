import "@/app/globals.css";
import "./Footer.css";
import Image from "next/image";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__about">
              <Image src={logo} alt="logo" className="logo footer-logo" />
              <p className="footer__about-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="footer__contacts">
              <ul className="footer__list">
                <h2 className="footer__list-title">Company</h2>
                <li className="footer__list-item">
                  <a href="#">Home</a>
                </li>
                <li className="footer__list-item">
                  <a href="#">About us</a>
                </li>
                <li className="footer__list-item">
                  <a href="#">Contacts us</a>
                </li>
                <li className="footer__list-item">
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
              <div className="get-in">
                <h2 className="footer__list-title">Get in touch</h2>
                <p className="footer-get">+1-234-567-890</p>
                <p className="footer-get">contact@greatstack.dev</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <p className="footer__copy">
        Copyright 2025 © GreatStack.dev All Right Reserved.
      </p>
    </>
  );
};

export default Footer;
