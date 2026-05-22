import { useState } from "react";
import "./Contact.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message send successfuly!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact__container-main">
      <h1 className="contact__container-title"> Contact Us</h1>
      <p className="contact__container-subtitle">Get in touch with our team</p>

      <div className="contact__container">
        <div className="contact__container-left">
          <div className="content-item">
            <div className="item-img">
              <Mail className="contact-image" />
            </div>
            <div className="item-text">
              <div className="text-title">Email</div>
              <div className="text-subtitle">hello@shopmate.com</div>
            </div>
          </div>
          <div className="content-item">
            <div className="item-img">
              <Phone className="contact-image" />
            </div>
            <div className="item-text">
              <div className="text-title">Phone</div>
              <div className="text-subtitle">+1 (555) 123-4567</div>
            </div>
          </div>
          <div className="content-item">
            <div className="item-img">
              <MapPin className="contact-image" />
            </div>
            <div className="item-text">
              <div className="text-title">Address</div>
              <div className="text-subtitle">
                123 Shop Street, City, ST 12345
              </div>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="content__container-right">
            <form onSubmit={handleSubmit} className="container-form">
              <div className="name-email">
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                  className="contact-input"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  className="contact-input"
                />
              </div>

              <div className="content__container-right">
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="subject-input"
                />
                <textarea
                  rows="6"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                  }}
                  className="textarea"
                />
                <button type="submit" className="form-btn">
                  <Send className="send-img" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
