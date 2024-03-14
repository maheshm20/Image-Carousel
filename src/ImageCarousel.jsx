// src/ImageCarousel.js
import React, { useState, useEffect } from 'react';
import './App.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]); // Restart interval when currentIndex changes

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="arrow left-arrow">
        &lt;
      </button>
      <img src={images[currentIndex]} alt="carousel" className="image" />
      <button onClick={nextSlide} className="arrow right-arrow">
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
