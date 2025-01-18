import React from 'react';
import './HostedSession.css';
import { FaSearch } from 'react-icons/fa';

const HostedSession = () => {
  return (
    <section className="hosted-session-container">
      <div className="search-bar">
        <select className="genre-dropdown">
          <option>All Genres</option>
          <option>Genres-1</option>
          <option>Genres-2</option>
          <option>Genres-3</option>
        </select>
        <input
          type="text"
          className="search-input"
          placeholder="Search your hosted games by Titles or session names..."
        />
        <div className="search-icon">
        <FaSearch />
        </div>
      </div>

      <div className="cards-container">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="hosted-card">
            <div className="card-content">
              <p className="card-title">Energy Transfer</p>
              <p className="session-name">Session Name: xxxxxxxxxxxxx</p>
              <p className="session-details">Easy | 5 Questions | 60s</p>
            </div>
            <div className="card-info">
              <div>
                <p className="card-type">MCQs</p>
                <p className="card-genre">Genre: Science</p>
                <p className="hosted-on">
                  Hosted on: 07/08/2024 | 1:05 PM
                </p>
              </div>
              <div className="button-container">
                <button className="btn host-game-btn">Host Game</button>
                <button className="btn leaderboard-btn">Leaderboard</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HostedSession;
