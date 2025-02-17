
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaUserTie, FaHamburger, FaTruck, FaClock } from 'react-icons/fa'; // استيراد الأيقونات

function About() {
  // تعريف المتغيرات
  const [yearsExperience] = useState(10);  // مثال على عدد السنوات
  const [masterChefs] = useState(50);  // مثال على عدد الطهاة المتميزين

  // دالة "اقرأ المزيد"
  const handleReadMore = () => {
    alert("You will be redirected to the full story!");
  };

  return (
    <div>
      {/* Animation for Features */}
      <motion.div
        className="features"
        initial={{ opacity: 0, x: -200 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }} 
      >
        <motion.div
          className="feature-item"
          initial={{ x: -200 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 1, delay: 0.4 }}
        >
          <FaUserTie className="feature-icon" />
          <p>Master Chefs</p>
          <h1>Discover expert chefs crafting exceptional dishes with passion and precision</h1>
        </motion.div>

        <motion.div
          className="feature-item"
          initial={{ x: 200 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 1, delay: 0.6 }}
        >
          <FaHamburger className="feature-icon" />
          <p>Quality Food</p>
          <h1>Enjoy fresh, premium ingredients and delicious, high-quality meals.</h1>
        </motion.div>

        <motion.div
          className="feature-item"
          initial={{ x: -200 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 1, delay: 0.8 }}
        >
          <FaTruck className="feature-icon" />
          <p>Online Order</p>
          <h1>Order your favorite meals easily and have them delivered to your door.</h1>
        </motion.div>

        <motion.div
          className="feature-item"
          initial={{ x: 200 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 1, delay: 1 }}
        >
          <FaClock className="feature-icon" />
          <p>24/7 Service</p>
          <h1>Available 24/7 to serve you anytime, day or night.</h1>
        </motion.div>
      </motion.div>

      {/* Animation for About Section */}
      <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
      >
        <div className="section-img">
          <motion.img
            src="https://food-founder.vercel.app/img/about-1.jpg"
            alt="about1"
            initial={{ y: 100 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          />
          <motion.img
            src="https://food-founder.vercel.app/img/about-2.jpg"
            alt="about2"
            initial={{ y: 100 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          />
          <motion.img
            src="https://food-founder.vercel.app/img/about-3.jpg"
            alt="about3"
            initial={{ y: 800 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />
          <motion.img
            src="https://food-founder.vercel.app/img/about-4.jpg"
            alt="about4"
            initial={{ y: 800 }} 
            animate={{ y: 0 }} 
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="section-text">
          <p className="section-title">About Us</p>
          <h1>
            Welcome to 🍴 Food <br />
            Founder
          </h1>
          <h3>
            At Food Founder, we’re dedicated to helping you discover the best dining experiences.
            Whether you're craving local favorites or exploring new cuisines, we connect you to top
            restaurants and exceptional chefs. Our goal is to make your dining journey easier, with
            a variety of options, online ordering, and reliable service – all at your fingertips!
          </h3>
          <div className="counters">
            <div className="counter">
              <h2>{yearsExperience}+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="counter">
              <h2>{masterChefs}+</h2>
              <p>Popular Master Chefs</p>
            </div>
          </div>
          <button className="read-more-btn" onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
