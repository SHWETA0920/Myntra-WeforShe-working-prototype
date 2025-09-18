import React from 'react';

const ProgressionPage = () => {
  return (
    <div className="page">
      <h2>Your Designer Journey</h2>
      
      <div className="tier-card">
        <h3>Your Designer Tier</h3>
        <h2>Stylist</h2>
        <p>Achieved through consistent innovation and skill! Keep pushing boundaries.</p>
      </div>
      
      <div>
        <p>750/1000 points to unlock 'Visionary'</p>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
      
      <div>
        <h3>Next Tier: Visionary</h3>
        <p>Reach 'Visionary' to gain exclusive access to premium design resources.</p>
      </div>
      
      <h3>Unlocked Rewards</h3>
      <p>Showcase your achievements and style with unique badges and accessories.</p>
      
      <div className="rewards">
        <div className="reward-item">
          <img src="https://via.placeholder.com/80x80/ffeb3b/000000?text=★" alt="Golden Star Badge" />
          <p>Golden Star Badge</p>
        </div>
        
        <div className="reward-item">
          <img src="https://via.placeholder.com/80x80/2196f3/ffffff?text=🔷" alt="Azure Pendant Necklace" />
          <p>Azure Pendant Necklace</p>
        </div>
      </div>
      
      <div className="challenge">
        <h3>Ready to Pitch Your Vision?</h3>
        <p>Your top-voted designs could be presented directly to the Myntra Fashion Team. Show them what you've got!</p>
        <button className="btn">Pitch to Myntra Fashion Team</button>
      </div>
    </div>
  );
};

export default ProgressionPage;