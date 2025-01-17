import React, { useState } from "react";
import "./Library.css";
import { FaEdit, FaPlay, FaTrashAlt } from "react-icons/fa";

const Library = () => {
    const items = [
        {
          title: "Energy Transfer",
          difficulty: "Easy",
          questions: 20,
          time: "60s",
          creator: "Rahul",
          genre: "Tech",
          date: "07/08/2024 | 1:05 PM",
        },
        {
          title: "Energy Transfer",
          difficulty: "Easy",
          questions: 20,
          time: "60s",
          creator: "Rahul",
          genre: "Tech",
          date: "07/08/2024 | 1:05 PM",
        },
        {
          title: "Energy Transfer",
          difficulty: "Easy",
          questions: 20,
          time: "60s",
          creator: "Rahul",
          genre: "Tech",
          date: "07/08/2024 | 1:05 PM",
        },
        {
          title: "Energy Transfer",
          difficulty: "Easy",
          questions: 20,
          time: "60s",
          creator: "Rahul",
          genre: "Tech",
          date: "07/08/2024 | 1:05 PM",
        },
    // Additional items can be added here
  ];

  const [dividerPosition, setDividerPosition] = useState(50);

  const handleDrag = (event) => {
    const newDividerPosition = (event.clientX / window.innerWidth) * 100;
    if (newDividerPosition > 10 && newDividerPosition < 90) {
      setDividerPosition(newDividerPosition);
    }
  };

  return (
    <div className="split-screen-container">
      <div
        className="left-panel"
        style={{ width: `${dividerPosition}%` }}
      >
        <div className="header">
          <button className="tab active">My Library</button>
          <button className="tab">Hosted Sessions</button>
        </div>
        <div className="sort-by">Sort by: Date</div>
        <div className="items-list">
        {items.map((item, index) => (
          <div key={index} className="item-card">
            <div className="item-thumbnail">
              <div className="thumbnail-placeholder"></div>
            </div>
            <div className="item-details">
              <h3 className="item-title">{item.title}</h3>
              <p className="item-meta">
                <span>{item.difficulty} | </span>
                <span>{item.questions} Questions | </span>
                <span>{item.time}</span>
              </p>
              <p className="item-meta-small">
                <span>MCQs </span>
                <span>Created by: {item.creator} | </span>
                <span>Genre: {item.genre}</span>
              </p>
              <p className="item-date">
                Created on: <span>{item.date}</span>
              </p>
            </div>
            <div className="item-actions">
              <button className="btn edit-btn">
                <FaEdit /> Edit
              </button>
              <button className="btn play-btn">
                <FaPlay /> Play
              </button>
              <button className="btn delete-btn">
                <FaTrashAlt />
              </button>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div
        className="divider"
        onMouseDown={(e) => {
          e.preventDefault();
          window.addEventListener("mousemove", handleDrag);
          window.addEventListener("mouseup", () =>
            window.removeEventListener("mousemove", handleDrag)
          );
        }}
      />




      <div
        className="right-panel"
        style={{ width: `${100 - dividerPosition}%` }}
      >
        <div className="header">
          <button className="tab active">MCQ's</button>
          <button className="tab">Leaderboard</button>
        </div>
        <div className="mcq-content">
          <div className="mcq-header">
            <span className="mcq-question-number">1/10</span>
            <span className="mcq-title">Harry Potter</span>
            <span className="mcq-timer">60</span>
          </div>
          <div className="mcq-question">
            Who directed 'Harry Potter and the Philosopher's Stone'?
          </div>
          <div className="mcq-options">
            <button className="option">Chris Columbus</button>
            <button className="option">Steven Spielberg</button>
            <button className="option">Peter Jackson</button>
            <button className="option">Vtim Burton</button>
          </div>
          <div className="mcq-actions">
            <button className="exit-btn">Exit</button>
            <button className="submit-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
