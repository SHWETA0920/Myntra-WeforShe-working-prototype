import React from 'react';
const shirtIcon = '👕';
const pantsIcon = '👖';
const watchIcon = '⌚';
const checkIcon = '✓';
const OutfitDisplay = ({ mainShirt, selectedBottomwear, selectedAccessory, outfitName, setOutfitName, isOutfitComplete, onSave }) => {
  return (
    <div className="outfit-display-card">
      <div className="outfit-display-header">
        <h2>Complete Outfit</h2>
      </div>
      
      <div className="outfit-preview-list">
        {/* Shirt */}
        <div className="outfit-item-preview">
          <img src={mainShirt.image} alt={mainShirt.name} className="preview-image" />
          <div className="preview-details">
            <p className="preview-name">{mainShirt.name}</p>
            <p className="preview-category">Base shirt</p>
          </div>
        </div>

        {/* Bottomwear */}
        <div className="outfit-item-preview">
          {selectedBottomwear ? (
            <>
              <img src={selectedBottomwear.image} alt={selectedBottomwear.name} className="preview-image" />
              <div className="preview-details">
                <p className="preview-name">{selectedBottomwear.name}</p>
                <p className="preview-category">Bottomwear</p>
              </div>
            </>
          ) : (
            <div className="preview-placeholder">
              <span>{pantsIcon}</span>
              <p>Select bottomwear</p>
            </div>
          )}
        </div>

        {/* Accessory */}
        <div className="outfit-item-preview">
          {selectedAccessory ? (
            <>
              <img src={selectedAccessory.image} alt={selectedAccessory.name} className="preview-image" />
              <div className="preview-details">
                <p className="preview-name">{selectedAccessory.name}</p>
                <p className="preview-category">Accessory</p>
              </div>
            </>
          ) : (
            <div className="preview-placeholder">
              <span>{watchIcon}</span>
              <p>Select accessory</p>
            </div>
          )}
        </div>
      </div>

      <div className="outfit-name-input">
        <label htmlFor="outfitName">Outfit Name</label>
        <input
          type="text"
          id="outfitName"
          value={outfitName}
          onChange={(e) => setOutfitName(e.target.value)}
          placeholder="Enter a name for your outfit..."
        />
      </div>

      <button
          onClick={onSave}
          disabled={!isOutfitComplete}
          className={`save-button ${!isOutfitComplete ? 'disabled' : ''}`}
      >
        Save Outfit
      </button>

      {!isOutfitComplete && (
        <p className="save-message">
          Complete your outfit selection to save
        </p>
      )}
    </div>
  );
};

export default OutfitDisplay;