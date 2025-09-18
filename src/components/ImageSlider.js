import React, { useState } from 'react';

// Import your images from the same directory
import cloth1 from './cloth1.jpg';
import cloth2 from './cloth2.jpeg';
import cloth3 from './cloth3.jpg';
import cloth4 from './cloth4m.jpg';
import cloth5 from './cloth5.jpg';
import cloth6 from './cloth6.jpg';
import cloth7 from './cloth7.jpg';
import cloth8 from './cloth8.jpg';
import cloth9 from './cloth9.jpg';
import cloth10 from './cloth10.jpg';
import cloth11 from './cloth11.webp';
import cloth12 from './cloth12.jpg';
import cloth13 from './cloth13.jpg';

const clothesImages = [
  cloth1,
  cloth2,
  cloth3,
  cloth4,
  cloth5,
  cloth6,
  cloth7,
  cloth8,
  cloth9,
  cloth10,
  cloth11,
  cloth12,
  cloth13,
];

const ITEMS_PER_SLIDE = 4;
const totalItems = clothesImages.length;

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + ITEMS_PER_SLIDE) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - ITEMS_PER_SLIDE + totalItems) % totalItems);
  };

  return (
    <div className="carousel-container">
      <button onClick={prevSlide} className="carousel-btn prev-btn">
        &lt;
      </button>

      <div className="carousel-track-container">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${(currentIndex / totalItems) * 100}%)` }}
        >
          {clothesImages.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`Clothing item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className="carousel-btn next-btn">
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;