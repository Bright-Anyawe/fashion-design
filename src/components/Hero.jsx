import React, { useState, useEffect } from "react";
import "./styles/Hero.css";
import image1 from "../assets/images/another.jpeg";
import image2 from "../assets/images/Mens.jpeg";
import image3 from "../assets/images/New styles.jpeg";
import image4 from "../assets/images/Nana ama.jpeg";

const images = [image1, image2, image3, image4];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content-container">
        <div className="hero-inner">
          <div>
            <h1 className="hero-title">Wear Better, Look Better</h1>
            <h2 className="hero-subtitle">
              Experience the artistry of NANA ESY's designs, where tradition
              meets contemporary style.
            </h2>
          </div>
          <button className="hero-btn">
            <span>Explore Designs</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
