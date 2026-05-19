import "@/app/globals.css";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="subscribe-section">
      <h1 className="subscribe-title">Subscribe now & get 20% off</h1>
      <p className="subscribe-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <div className="subscribe-form">
        <input
          type="text"
          className="subscribe-input"
          placeholder="Enter your email id"
        />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
