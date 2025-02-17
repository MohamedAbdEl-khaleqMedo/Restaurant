import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const chefs = [
  { img: "https://food-founder.vercel.app/img/team-1.jpg", name: "John Doe", role: "Head Chef" },
  { img: "https://food-founder.vercel.app/img/team-2.jpg", name: "Jane Smith", role: "Pastry Chef" },
  { img: "https://food-founder.vercel.app/img/team-3.jpg", name: "Mike Johnson", role: "Sous Chef" },
  { img: "https://food-founder.vercel.app/img/team-4.jpg", name: "Emily Davis", role: "Line Cook" },
];

const testimonials = [
  { img: "https://food-founder.vercel.app/img/testimonial-1.jpg", name: "Alice Brown", profession: "Food Blogger" },
  { img: "https://food-founder.vercel.app/img/testimonial-2.jpg", name: "Chris Green", profession: "Chef" },
  { img: "https://food-founder.vercel.app/img/testimonial-3.jpg", name: "Sophia Lee", profession: "Restaurant Owner" },
  { img: "https://food-founder.vercel.app/img/testimonial-4.jpg", name: "Sara  Wilson", profession: "Food Critic" },
];

function Pages() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // التبديل كل 5 ثواني
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      {/* Master Chefs Section */}
      <div className="title-section">
        <p>Our Team</p>
        <h1>Our Master Chefs</h1>
      </div>

      <div className="chefs-container">
        {chefs.map((chef, index) => (
          <motion.div
            key={index}
            className="chef-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={chef.img} alt={chef.name} className="chef-image" />
            <p className="chef-name">{chef.name}</p>
            <h4 className="chef-role">{chef.role}</h4>
            <div className="social-icons">
              <FaFacebookF className="icon text-blue-600" />
              <FaTwitter className="icon text-blue-400" />
              <FaInstagram className="icon text-pink-500" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-section">
        <h1>Our Clients' Opinions</h1>
      </div>
      <div className="testimonial-slider">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="testimonial-card"
        >
          <img
            src={testimonials[currentIndex].img}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />
          <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
          <p className="testimonial-profession">{testimonials[currentIndex].profession}</p>
        </motion.div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : "inactive"}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pages;
