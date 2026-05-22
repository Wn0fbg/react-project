import "./About.css";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the heart of everything we do.",
    },
    {
      icon: Award,
      title: "Quality Products",
      description: "We ensure all products meet our high standards.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building lasting relationships with our customers.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly improving our platform and services.",
    },
  ];

  return (
    <div className="about__container">
      <div className="about__content-top">
        <h1 className="about__container-title">About QuickCart</h1>
        <p className="about__container-subtitle">
          Your trusted e-commerce platform for quality products and exceptional
          service.
        </p>
      </div>
      <div className="about__container-center">
        {values.map((value, index) => {
          return (
            <div key={index} className="center__item">
              <div className="center__item-icon">
                <value.icon className="item-img" />
              </div>
              <h3 className="center__item-title">{value.title}</h3>
              <p className="center__item-description">{value.description}</p>
            </div>
          );
        })}
      </div>
      <div className="about__container-bottom">
        <h2 className="bottom-title">Our Story</h2>
        <p className="bottom-description">
          Founded with a vision to make online shopping simple and enjoyable,
          ShopMate has grown to become a trusted platform for thousands of
          customers worldwide. We believe that everyone deserves access to
          quality products at fair prices, backed by exceptional customer
          service.
        </p>
      </div>
    </div>
  );
};

export default About;
