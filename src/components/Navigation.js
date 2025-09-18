import React from 'react';

const Navigation = ({ activePage, onNavigate }) => {
  const pages = [
    { name: 'Home', id: 'home' },
    { name: 'Create', id: 'create' },
    { name: 'Showcase', id: 'showcase' },
    { name: 'Progression', id: 'progression' },
    { name: 'Leaderboard', id: 'leaderboard' },
  ];

  return (
    <nav className="navigation-bar">
      <ul>
        {pages.map(page => (
          <li key={page.id} className={activePage === page.id ? 'active' : ''}>
            <button onClick={() => onNavigate(page.id)}>
              {page.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;