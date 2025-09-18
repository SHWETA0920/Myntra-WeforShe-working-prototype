import React, { useState } from 'react';

const FloralGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Designs' },
    { id: 'dresses', label: 'Dresses' },
    { id: 'tops', label: 'Tops' },
    { id: 'accessories', label: 'Accessories' }
  ];
  
  const floralDesigns = [
    {
      id: 1,
      title: 'Vintage Floral Midi Dress',
      description: 'Perfect for Sunday brunch with friends. Comfortable and stylish.',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3JhbCUyMGRyZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80',
      likes: 243,
      category: 'dresses'
    },
    {
      id: 2,
      title: 'Floral Print Blouse',
      description: 'Elegant and feminine blouse with delicate floral patterns.',
      image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3JhbCUyMHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80',
      likes: 187,
      category: 'tops'
    },
    {
      id: 3,
      title: 'Silk Floral Scarf',
      description: 'Add a touch of elegance to any outfit with this beautiful scarf.',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3JhbCUyMHNjYXJmfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80',
      likes: 156,
      category: 'accessories'
    }
  ];

  return (
    <div className="floral-section">
      <div className="floral-header">
        <h2>Floral Design Inspiration</h2>
        <p>Explore beautiful floral patterns and designs for your outfit</p>
      </div>
      
      <div className="gallery-controls">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`category-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      <div className="gallery">
        {floralDesigns
          .filter(design => activeFilter === 'all' || design.category === activeFilter)
          .map(design => (
            <div key={design.id} className="floral-card">
              <img src={design.image} alt={design.title} className="floral-img" />
              <div className="floral-content">
                <h3 className="floral-title">{design.title}</h3>
                <p className="floral-desc">{design.description}</p>
                <div className="floral-meta">
                  <span><i className="fas fa-heart"></i> {design.likes}</span>
                  <span>{design.category.charAt(0).toUpperCase() + design.category.slice(1)}</span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      
      <div className="view-more">
        <button className="btn">View More Floral Designs</button>
      </div>
    </div>
  );
};

export default FloralGallery;