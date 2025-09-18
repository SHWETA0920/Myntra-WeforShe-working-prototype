import React, { useState } from "react";

const LeaderboardPage = () => {
  const [activeFilter, setActiveFilter] = useState("weekly");

  const leaders = [
    {
      rank: 1,
      name: "Anya Sharma",
      points: 15200,
      outfits: null,
      bestOutfit: "Platinum Tier",
    },
    {
      rank: 2,
      name: "Rohan Gupta",
      points: 12800,
      outfits: 72,
      bestOutfit: null,
    },
    {
      rank: 3,
      name: "Priya Singh",
      points: 11500,
      outfits: 68,
      bestOutfit: null,
    },
    {
      rank: 4,
      name: "Vikram Meh",
      points: 9800,
      outfits: 55,
      bestOutfit: null,
    },
    {
      rank: 5,
      name: "Sneha Redd",
      points: 8700,
      outfits: 48,
      bestOutfit: null,
    },
    { rank: 6, name: "Arjun K.", points: 7200, outfits: 40, bestOutfit: null },
  ];

  const filters = [
    { id: "daily", label: "Daily" },
    { id: "weekly", label: "Weekly" },
    { id: "all-time", label: "All-Time" },
  ];

  return (
    <div className="page">
      <h2>Leaderboard</h2>

      <div className="leaderboard">
        {leaders.map((leader) => (
          <div key={leader.rank} className="leaderboard-item">
            <div className="rank">{leader.rank}</div>
            <div className="leaderboard-details">
              <h3>{leader.name}</h3>
              <p>{leader.points} points</p>
            </div>
            <div className="outfit-count">
              {leader.bestOutfit ? (
                <>
                  <strong>Best Outfit</strong>
                  <p>{leader.bestOutfit}</p>
                </>
              ) : (
                <p>{leader.outfits} outfits</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`category-btn ${
              activeFilter === filter.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;
