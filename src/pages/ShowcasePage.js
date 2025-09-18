import React from 'react'; 
import myntraLogo from '../components/myntralogo.webp'; 

// Import all your images
import denimJeansImage from '../components/denim jeans.jpg'; 
import khakiChinosImage from '../components/khaki chinos.webp'; 
import NavyShort from '../components/Navy shorts.jpg'; 
import MenFormal from '../components/men formal plants.jpg'; 
import Cap from '../components/cap1.jpg'; 
import aviGlasses from '../components/aviator sunglasses.jpg'; 
import classicwatch from '../components/classic watch.jpg'; 
import bracelets from '../components/men bracelet.webp'; 
import shirt from '../components/shirt.jpg'; 
import femaleBlouse from '../components/top2.jpeg';
import femaleSkirt from '../components/skirt.webp';
import femaleShorts from '../components/femaleShorts2.jpeg';
import femalepant from '../components/pantfemale.jpeg';
import pant from '../components/straight pant.jpg';
import necklace from '../components/necklace.jpg';
import hairs from '../components/hair.jpg';
import watch from '../components/watch.jpg';

// Sample data for male leaderboard
const maleLeaderboardData = [ 
  { 
    name: 'Urban Elegance', 
    score: 1000, 
    votes: 247, 
    outfit: [ 
      { name: 'Premium Shirt', image: shirt, category: 'Shirt' }, 
      { name: 'Classic Denim Jeans', image: denimJeansImage, category: 'Bottomwear' }, 
      { name: 'Classic Watch', image: classicwatch, category: 'Accessory' }, 
    ] 
  }, 
  { 
    name: 'Casual Friday', 
    score: 890, 
    votes: 203, 
    outfit: [ 
      { name: 'Red Polo Shirt', image: 'https://via.placeholder.com/150/ff4500/ffffff?text=Red+Polo', category: 'Shirt' }, 
      { name: 'Khaki Chinos', image: khakiChinosImage, category: 'Bottomwear' }, 
      { name: 'Aviator Sunglasses', image: aviGlasses, category: 'Accessory' }, 
    ] 
  },
  { 
    name: 'Weekend Style', 
    score: 820, 
    votes: 178, 
    outfit: [ 
      { name: 'Striped T-Shirt', image: 'https://via.placeholder.com/150/0000ff/ffffff?text=Striped+Tee', category: 'Shirt' }, 
      { name: 'Navy Shorts', image: NavyShort, category: 'Bottomwear' }, 
      { name: 'Cap', image: Cap, category: 'Accessory' }, 
    ] 
  },
  { 
    name: 'Formal Attire', 
    score: 780, 
    votes: 165, 
    outfit: [ 
      { name: 'White Dress Shirt', image: 'https://via.placeholder.com/150/ffffff/000000?text=White+Shirt', category: 'Shirt' }, 
      { name: 'Formal Trousers', image: MenFormal, category: 'Bottomwear' }, 
      { name: 'Leather Bracelet', image: bracelets, category: 'Accessory' }, 
    ] 
  }
];

// Sample data for female leaderboard
const femaleLeaderboardData = [ 
  { 
    name: 'Elegant Evening', 
    score: 980, 
    votes: 230, 
    outfit: [ 
      { name: 'Stylish Top', image: femaleBlouse, category: 'Top' }, 
      { name: 'Elegant Skirt', image: femaleSkirt, category: 'Bottomwear' }, 
      { name: 'Necklace', image: necklace, category: 'Accessory' }, 
    ] 
  }, 
  { 
    name: 'Summer Breeze', 
    score: 870, 
    votes: 195, 
    outfit: [ 
      { name: 'Casual Top', image: 'https://via.placeholder.com/150/ff69b4/ffffff?text=Casual+Top', category: 'Top' }, 
      { name: 'Shorts', image: femaleShorts, category: 'Bottomwear' }, 
      { name: 'Hair Accessories', image: hairs, category: 'Accessory' }, 
    ] 
  },
  { 
    name: 'Office Chic', 
    score: 840, 
    votes: 185, 
    outfit: [ 
      { name: 'Professional Blouse', image: 'https://via.placeholder.com/150/87ceeb/000000?text=Blouse', category: 'Top' }, 
      { name: 'Formal Pants', image: femalepant, category: 'Bottomwear' }, 
      { name: 'Elegant Watch', image: watch, category: 'Accessory' }, 
    ] 
  },
  { 
    name: 'Casual Day Out', 
    score: 790, 
    votes: 172, 
    outfit: [ 
      { name: 'Comfy Top', image: 'https://via.placeholder.com/150/ffb6c1/000000?text=Comfy+Top', category: 'Top' }, 
      { name: 'Straight Pants', image: pant, category: 'Bottomwear' }, 
      { name: 'Sunglasses', image: aviGlasses, category: 'Accessory' }, 
    ] 
  }
];

const ShowcasePage = ({ onNavigate, gender = 'male' }) => {
  // Determine which data to use based on gender
  const leaderboardData = gender === 'female' ? femaleLeaderboardData : maleLeaderboardData;
  
  const winner = leaderboardData[0]; 
  const sortedByRank = [...leaderboardData].sort((a, b) => b.score - a.score); 
  const sortedByVotes = [...leaderboardData].sort((a, b) => b.votes - a.votes); 

  const totalOutfits = leaderboardData.length; 
  const totalVotes = leaderboardData.reduce((sum, item) => sum + item.votes, 0); 
  const highestScore = Math.max(...leaderboardData.map(item => item.score)); 

  return ( 
    <div className="showcase-page"> 
      {/* Only keep the logo button, remove the header text */}
      <button className="home-logo-btn" onClick={() => onNavigate('home')}> 
        <img src={myntraLogo} alt="Myntra Logo" className="logo-image" /> 
      </button> 

      {/* Winner Section - Moved to top without the page header */}
      <div className="winner-section"> 
        <div className="winner-details"> 
          <h2>🏆 Winner 🏆</h2> 
          <h3>{winner.name}</h3> 
          <p> 
            <span className="star-icon">⭐️</span> {winner.score} Points 
            <span className="heart-icon">❤️</span> {winner.votes} Votes 
          </p> 
        </div> 
        <div className="outfit-preview-grid"> 
          {winner.outfit.map((item, index) => ( 
            <div key={index} className="outfit-preview-card"> 
              <img src={item.image} alt={item.name} /> 
              <p>{item.category}</p> 
            </div> 
          ))} 
        </div> 
      </div> 

      <div className="leaderboard-section"> 
        <h2>Full Leaderboard</h2> 
        <div className="leaderboard-content-grid"> 
          {/* Votes Received Column */} 
          <div className="leaderboard-column"> 
            <h3>Votes Received</h3> 
            <div className="leaderboard-list"> 
              {sortedByVotes.map((entry, index) => ( 
                <div key={index} className="ranking-card"> 
                  <p className="ranking-name">{entry.name}</p> 
                  <p className="ranking-votes">❤️ {entry.votes}</p> 
                </div> 
              ))} 
            </div> 
          </div> 

          {/* Final Rankings Column */} 
          <div className="leaderboard-column"> 
            <h3>Final Rankings</h3> 
            <div className="leaderboard-list"> 
              {sortedByRank.map((entry, index) => { 
                const rankClass = index === 0 ? 'rank-1' : index === 1 ? 'rank-2' : index === 2 ? 'rank-3' : ''; 
                const rankIcon = index === 0 ? '👑' : `#${index + 1}`; 
                return ( 
                  <div key={index} className={`ranking-card ${rankClass}`}> 
                    <p className="ranking-rank">{rankIcon}</p> 
                    <div className="ranking-details"> 
                      <p className="ranking-name">{entry.name}</p> 
                      <p className="ranking-score">⭐️ {entry.score} points</p> 
                    </div> 
                  </div> 
                ); 
              })} 
            </div> 
          </div> 
        </div> 
      </div> 

      <div className="leaderboard-stats"> 
        <p><span>{totalOutfits}</span> Total Outfits</p> 
        <p><span>{totalVotes}</span> Total Votes</p> 
        <p><span>{highestScore}</span> Highest Score</p> 
      </div> 
    </div> 
  ); 
}; 

export default ShowcasePage;