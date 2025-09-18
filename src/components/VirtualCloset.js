import React from 'react';

const VirtualCloset = ({ title, items, selectedItem, onSelect }) => {
  return (
    <div className="virtual-closet-card">
      <div className="virtual-closet-header">
        <h2>{title}</h2>
      </div>
      <div className="virtual-closet-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className={`closet-item-card ${selectedItem?.id === item.id ? 'selected' : ''}`}
            onClick={() => onSelect(item)}
          >
            <img src={item.image} alt={item.name} className="closet-item-image" />
            <div className="closet-item-overlay">
              <span className="closet-item-name">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualCloset;