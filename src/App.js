// src/App.js

import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import GenderSelectionPage from './pages/GenderSelectionPage';
import CreatePage from './pages/CreatePage';
import ShowcasePage from './pages/ShowcasePage';
import ProgressionPage from './pages/ProgressionPage';
import LeaderboardPage from './pages/LeaderboardPage';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [gender, setGender] = useState('male');
  const [pageParams, setPageParams] = useState({});

  const navigateTo = (page, params = {}) => {
    setActivePage(page);
    setPageParams(params);
    
    // Update gender if provided in params
    if (params.gender) {
      setGender(params.gender);
    }
  };

  const renderPage = () => {
    switch(activePage) {
      case 'home':
        return <HomePage onStartDesigning={() => navigateTo('gender-select')} />;
      case 'gender-select':
        return <GenderSelectionPage onSelectGender={(g) => { 
          setGender(g); 
          navigateTo('create', { gender: g }); 
        }} />;
      case 'create':
        return <CreatePage onNavigate={navigateTo} gender={gender} />;
      case 'showcase':
        return <ShowcasePage onNavigate={navigateTo} gender={pageParams.gender || gender} />;
      case 'progression':
        return <ProgressionPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={activePage === 'home' ? 'App-home' : 'App-game-zone'}>
      <main className="container">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;