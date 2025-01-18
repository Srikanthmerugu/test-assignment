import React, { useState } from "react";
// import MyLibrary from "./MyLibrary";
// import HostedSessions from "./HostedSessions";
// import MCQs from "./MCQs";
// import Leaderboard from "./Leaderboard";
// import "./styles.css";
import MyLibrary from "../../components/MyLibrary/MyLibrary";
import HostedSessions from "../../components/HostedSession/HostedSession";
import McqPanel from "../../components/McqPanel/McqPanel";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const MainComponent = () => {
  const [activeTabLeft, setActiveTabLeft] = useState("myLibrary");
  const [activeTabRight, setActiveTabRight] = useState("mcqs");
  const [dividerPosition, setDividerPosition] = useState(50);

  const handleDrag = (event) => {
    const newDividerPosition = (event.clientX / window.innerWidth) * 100;
    if (newDividerPosition > 10 && newDividerPosition < 90) {
      setDividerPosition(newDividerPosition);
    }
  };

  return (
    <><div>
 <Header />
    </div>
         

    <div className="main-container">
      {/* Left Section */}
      <Sidebar/>
      <div
        className="left-section"
        style={{ width: `${dividerPosition}%` }}
      >
        <div className="tab-buttons">
          <button
            className={activeTabLeft === "myLibrary" ? "active" : ""}
            onClick={() => setActiveTabLeft("myLibrary")}
          >
            My Library
          </button>
          <button
            className={activeTabLeft === "hostedSessions" ? "active" : ""}
            onClick={() => setActiveTabLeft("hostedSessions")}
          >
            Hosted Sessions
          </button>
        </div>
        <div className="tab-content">
          {activeTabLeft === "myLibrary" ? <MyLibrary /> : <HostedSessions />}
        </div>
      </div>

      {/* Divider */}
      <div
        className="divider"
        onMouseDown={(e) => {
          document.addEventListener("mousemove", handleDrag);
          document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", handleDrag);
          });
        }}
      ></div>

      {/* Right Section */}
      <div
        className="right-section"
        style={{ width: `${100 - dividerPosition}%` }}
      >
        <div className="tab-buttons">
          <button
            className={activeTabRight === "mcqs" ? "active" : ""}
            onClick={() => setActiveTabRight("mcqs")}
          >
            MCQ's
          </button>
          <button
            className={activeTabRight === "leaderboard" ? "active" : ""}
            onClick={() => setActiveTabRight("leaderboard")}
          >
            Leaderboard
          </button>
        </div>
        <div className="tab-content">
          {activeTabRight === "mcqs" ? <McqPanel /> : <Leaderboard />}
        </div>
      </div>
    </div>
    </>
  );
};

export default MainComponent;
