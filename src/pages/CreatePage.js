import React, { useState } from 'react';
import VirtualCloset from '../components/VirtualCloset';
import OutfitDisplay from '../components/OutfitDisplay';

// Import your logo from the components folder
import myntraLogo from '../components/myntralogo.webp';
// Import all your local images from the components folder
import denimJeansImage from '../components/denim jeans.jpg';
import khakiChinosImage from '../components/khaki chinos.webp';
import NavyShort from '../components/Navy shorts.jpg';
import MenFormal from '../components/men formal plants.jpg';
import Cap from '../components/cap1.jpg';
import aviGlasses from '../components/aviator sunglasses.jpg';
import classicwatch from '../components/classic watch.jpg';
import bracelets from '../components/men bracelet.webp';
import shirt from '../components/shirt.jpg';

// Female-specific images
import femaleBlouse from '../components/top2.jpeg';
import femaleSkirt from '../components/skirt.webp';
import femaleShorts from '../components/femaleShorts2.jpeg';
import femalepant from '../components/pantfemale.jpeg';
import pant from '../components/straight pant.jpg';
import necklace from '../components/necklace.jpg';
import hairs from '../components/hair.jpg';
import watch from '../components/watch.jpg';

// Data for Male outfits
const maleOutfits = {
  bottomwear: [
    { id: 'jeans-1', name: 'Classic Denim Jeans', image: denimJeansImage },
    { id: 'chinos-1', name: 'Cargo Jeans', image: khakiChinosImage },
    { id: 'shorts-1', name: 'Navy Shorts', image: NavyShort },
    { id: 'trousers-1', name: 'Formal Trousers', image: MenFormal }
  ],
  accessories: [
    { id: 'watch-1', name: 'Classic Watch', image: classicwatch },
    { id: 'sunglasses-1', name: 'Aviator Sunglasses', image: aviGlasses },
    { id: 'bag-1', name: 'Cap', image: Cap },
    { id: 'shoes-1', name: 'Men Bracelet', image: bracelets }
  ],
  mainShirt: {
    id: 'm-shirt-main',
    name: 'Premium Shirt',
    image: shirt
  }
};

// Data for Female outfits
const femaleOutfits = {
  bottomwear: [
    { id: 'f-skirt-1', name: 'Elegant Skirt', image: femaleSkirt },
    { id: 'f-shorts-1', name: 'Shorts', image: femaleShorts },
    { id: 'f-trousers-1', name: 'Formal Pants', image: femalepant },
    { id: 'f-trousers-2', name: 'Straight Pant', image: pant }
  ],
  accessories: [
    { id: 'f-watch-1', name: 'Necklace', image: necklace },
    { id: 'f-sunglasses-1', name: 'Sunglasses', image: aviGlasses },
    { id: 'f-bag-1', name: 'Hair Accessories', image: hairs },
    { id: 'f-ear-1', name: 'Watch', image: watch },
  ],
  mainShirt: {
    id: 'f-shirt-main',
    name: 'Stylish Top',
    image: femaleBlouse,
  }
};

const CreatePage = ({ onNavigate, gender }) => {
  // Use a conditional statement to select the correct data
  const currentOutfits = gender === 'male' ? maleOutfits : femaleOutfits;

  const [selectedBottomwear, setSelectedBottomwear] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [outfitName, setOutfitName] = useState('');

  const isOutfitComplete = selectedBottomwear && selectedAccessory && outfitName.trim();
  
  const handleOutfitSave = () => {
    if (isOutfitComplete) {
      // Pass the gender to the showcase page
      onNavigate('showcase', { gender });
    } else {
      alert("Please complete your outfit to save!");
    }
  };

  return (
    <div className="create-page-container">
      <button className="home-logo-btn" onClick={() => onNavigate('home')}>
        <img src={myntraLogo} alt="Myntra Logo" className="logo-image" />
      </button>

      <div className="create-page-header">
        <h1>Build Your Perfect {gender === 'male' ? "Men's" : "Women's"} Outfit</h1>
        <p>Mix and match to create your signature style</p>
      </div>
      
      <div className="create-page-content">
        <div className="selection-area">
          {/* Card 1: Your Base Shirt (static card) */}
          <div className="virtual-closet-card">
            <div className="virtual-closet-header">
              <h2>Your Base {gender === 'male' ? 'Shirt' : 'Top'}</h2>
            </div>
            <div className="virtual-closet-grid">
              <div className="closet-item-card">
                <img src={currentOutfits.mainShirt.image} alt={currentOutfits.mainShirt.name} className="closet-item-image" />
                <div className="closet-item-overlay">
                  <span className="closet-item-name">{currentOutfits.mainShirt.name}</span>
                </div>
              </div>
            </div>
          </div>
          
          <VirtualCloset
            title="Choose Bottomwear"
            items={currentOutfits.bottomwear}
            selectedItem={selectedBottomwear}
            onSelect={setSelectedBottomwear}
          />
          
          <VirtualCloset
            title="Choose Accessories"
            items={currentOutfits.accessories}
            selectedItem={selectedAccessory}
            onSelect={setSelectedAccessory}
          />
        </div>
        
        <div className="outfit-summary-area">
          <OutfitDisplay
            mainShirt={currentOutfits.mainShirt}
            selectedBottomwear={selectedBottomwear}
            selectedAccessory={selectedAccessory}
            outfitName={outfitName}
            setOutfitName={setOutfitName}
            isOutfitComplete={isOutfitComplete}
            onSave={handleOutfitSave}
            gender={gender}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePage;