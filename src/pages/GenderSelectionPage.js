import React from 'react';

const GenderSelectionPage = ({ onSelectGender }) => {
  return (
    <div className="gender-select-page">
      <div className="gender-select-header">
        <h1>Choose Your Gender</h1>
        <p>Select your gender to begin your design journey.</p>
      </div>
      <div className="gender-select-options">
        <button className="gender-btn" onClick={() => onSelectGender('male')}>
          {/* We replaced the icon with a text label */}
          <span>Male</span>
        </button>
        <button className="gender-btn" onClick={() => onSelectGender('female')}>
          {/* We replaced the icon with a text label */}
          <span>Female</span>
        </button>
      </div>
    </div>
  );
};

export default GenderSelectionPage;