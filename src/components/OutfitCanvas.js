import React from 'react';
import model from './model.png'; // Make sure you have this image

const OutfitCanvas = ({ outfit, onDropItem }) => {

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemData = e.dataTransfer.getData("text/plain");
    const item = JSON.parse(itemData);
    onDropItem(item);
  };

  return (
    <div
      className="outfit-canvas-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="outfit-canvas-model-area">
        <img src={model} alt="Fashion Model" className="model-base" />

        {/* Conditionally render outfit pieces as overlays */}
        {outfit.top && <img src={outfit.top.image} alt="Top" className="outfit-piece top-piece" />}
        {outfit.bottom && <img src={outfit.bottom.image} alt="Bottom" className="outfit-piece bottom-piece" />}
        {outfit.shoes && <img src={outfit.shoes.image} alt="Shoes" className="outfit-piece shoes-piece" />}
        {outfit.accessory && <img src={outfit.accessory.image} alt="Accessory" className="outfit-piece accessory-piece" />}
      </div>
    </div>
  );
};

export default OutfitCanvas;