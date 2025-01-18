import React from 'react';
import './Leaderboard.css';
import profile from './Profle.png'

const Leaderboard = () => {
  const topThree = [
    { rank: 1, name: 'Jane Doe', email: 'pr******@***', theme: 'Games', coins: 3454, medal: 'gold' },
    { rank: 2, name: 'Jane Doe', email: 'pr******@gmail.com', theme: 'Marvel', coins: 2530, medal: 'silver' },
    { rank: 3, name: 'Jane Doe', email: 'pr******@***', theme: 'Anime', coins: 2950, medal: 'bronze' },
  ];

  const others = [
    { rank: 4, name: 'Jane Doe', email: 'pr******@gmail.com', theme: 'Marvel', coins: 2245 },
    { rank: 5, name: 'Jane Doe', email: 'pr******@***', theme: 'Harry Potter', coins: 2105 },
    { rank: 6, name: 'Jane Doe', email: 'pr******@***', theme: 'Oscar Movie', coins: 1920 },
    { rank: 7, name: 'Jane Doe', email: 'pr******@***', theme: 'Marvel', coins: 1815 },
  ];

  return (
    <section className="leaderboard-container">
      <div className="leaderboard-header">
        {/* <h5>Leaderboard</h5> */}
      </div>

      <div className="top-three">
        {topThree.map((user) => (
          <div key={user.rank} className={`top-card rank-${user.rank}`}>
            <div><img src={profile} /></div>
            <p className="name">{user.name}</p>
            <p className="email">{user.email}</p>
            <div className='top-card-theme'>
            <p className="theme">{user.theme}</p>
            <p className="coins"> 🪙 {user.coins}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="other-leaderboard">
        <div className="table-header">
          {/* <span>Name</span>
          <span>Mail</span> */}
          <span>Theme</span>
          <span>Coins</span>
        </div>
        {others.map((user) => (
          <div key={user.rank} className="table-row">
            <div className="player-info">
              <span className="rank">#{user.rank}</span>
              <span className="name">{user.name}</span>
              <span className="email">{user.email}</span>
            </div>
            <span className="theme">{user.theme}</span>
            <span className="coins">🏅 {user.coins}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaderboard;
