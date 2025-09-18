import React from "react";
import ImageSlider from '../components/ImageSlider';
import headerImage from '../components/headerr.avif'; // Assuming you kept this for the reflection

const HomePage = ({ onStartDesigning }) => {
  return (
    <div className="home-page">
      <div className="home-floating-card">
        <img
          src={headerImage}
          alt="Header reflection"
          className="reflection-image"
        />
        
        <h1>Myntra: The Vibe & Verse Studio</h1>
        <h2>Hello, Superstar Designer!</h2>
        <p>
          I've got an exciting challenge for you today. Let's create something
          truly fabulous!
        </p>
      </div>
      
      <ImageSlider />

      <button className="start-btn creative-btn" onClick={onStartDesigning}>
        <span>Start Designing</span>
        <span className="arrow-icon">→</span>
      </button>
      
      {/* Ensure the footer is NOT commented out */}
      <footer>
        <p className="home-footer-text">Made with ❤️ Myntra</p>
      </footer>
    </div>
  );
};

export default HomePage;