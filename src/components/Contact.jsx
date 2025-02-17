import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showScroll, setShowScroll] = useState(false);

  // تحديث البيانات في الفورم
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // إرسال الفورم
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  // التعامل مع زر الرجوع للأعلى
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <h2>Contact Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-column">
            <h3>Company</h3>
            <Link to="/about-us">About Us</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h3>Contact</h3>
            <p>📍 123 Street, New York, USA</p>
            <p>📧 info@example.com</p>
            <p>📞 +123 456 7890</p>
          </div>

          {/* Opening Hours */}
          <div className="footer-column">
            <h3>Opening Hours</h3>
            <p>Monday - Saturday: 09AM - 09PM</p>
            <p>Sunday: 10AM - 08PM</p>
          </div>

          {/* Social Media */}
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="/#"><FaFacebookF /></a>
              <a href="/#"><FaTwitter /></a>
              <a href="/#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScroll && (
          <button className="scrollToTop" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        )}
      </footer>
    </div>
  );
}

export default ContactForm;
