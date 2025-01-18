import React from "react";
// import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import MainDashboard from "../../Pages/MainDashboard/MainDashboard";

const Dashboard = () => {
  return (
    <div className="Dashboard-Main-container">
   
        {/* <Header /> */}
      <div className="Dashboard-container">
        <div className="dashboard-sidebar">
        
          {/* <Sidebar /> */}
        </div>
        <div className="Dashboard-sub-container">
          <MainDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
