import React, { useState } from "react";
import {
  FaBook,
  FaBrain,
  FaCogs,
  FaSignOutAlt,
  FaUserAlt,
  FaTrophy,
  FaVideo,
  FaWallet,
} from "react-icons/fa";
import {
  MdLibraryBooks,
  MdNotifications,
  MdGroups,
  MdMarketplace,
} from "react-icons/md";
import { BiUpArrowCircle } from "react-icons/bi";

import { BsShop,BsStars } from "react-icons/bs";


import { BiHelpCircle } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Sidebar Toggle start*/}
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      {/* Sidebar Toggle close*/}


      {/* Profile Section start*/}
      <div className="Profile-main-section">
        {isOpen && (
          <div className="profile-section">
            <div>
              <h3 className="profile-name">Prasanth</h3>
              <p className="profile-role">Student</p>
            </div>
          </div>
        )}

        {isOpen && <button className="create-button">+ Create</button>}
      </div>
      <nav className="nav-links">
        <ul>
            <div className="Profile-main-section">
          <li className="nav-item">
            <Link to="/library">
              <span className="nav-icon">
                <FaBook />
              </span>
              {isOpen && <span className="nav-text">My Library</span>}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/smart-review">
              <span className="nav-icon">
                <MdLibraryBooks />
              </span>
              {isOpen && <span className="nav-text">Smart Review</span>}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/hosted-sessions">
              <span className="nav-icon">
                <FaVideo />
              </span>
              {isOpen && <span className="nav-text">Hosted Sessions</span>}
            </Link>
          </li>
          </div>
<div><li className="nav-item create-Battle">
            <Link to="/battle">
              <span className="nav-icon">
                <FaBrain />
              </span>
              {isOpen && <span className="nav-text">Battle of the Brains</span>}
            </Link>
          </li>
          </div>
          

          <div className="Profile-main-section">

          <li className="nav-item">
            <Link to="/groups">
              <span className="nav-icon">
                <MdGroups />
              </span>
              {isOpen && <span className="nav-text">Groups</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/marketplace">
              <span className="nav-icon">
                <BsShop />
              </span>
              {isOpen && <span className="nav-text">Marketplace</span>}
            </Link>
          </li>
          </div>

          <div className="Profile-main-section">


          <li className="nav-item">
            <Link to="/rewards">
              <span className="nav-icon">
                <FaTrophy />
              </span>
              {isOpen && <span className="nav-text">Rewards</span>}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/notifications">
              <span className="nav-icon">
                <MdNotifications />
              </span>
              {isOpen && <span className="nav-text">Notifications</span>}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/profile">
              <span className="nav-icon">
                <FaUserAlt />
              </span>
              {isOpen && <span className="nav-text">Profile</span>}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/settings">
              <span className="nav-icon">
                <FaCogs />
              </span>
              {isOpen && <span className="nav-text">Settings</span>}
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/how-to-use">
              <span className="nav-icon">
                <BiHelpCircle />
              </span>
              {isOpen && <span className="nav-text">How to Use</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/support-hub">
              <span className="nav-icon">
                <FaWallet />
              </span>
              {isOpen && <span className="nav-text">Support Hub</span>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout">
              <span className="nav-icon">
                <FaSignOutAlt />
              </span>
              {isOpen && <span className="nav-text">Logout</span>}
            </Link>
          </li>
          </div>
        </ul>
      </nav>
      {/* Other Links */}
      {isOpen && <div className="other-links">
        
      
        
        <div className="Profile-main-section">
          <li className="nav-item">
            <Link to="/library">
              <span className="nav-icon">
                <BsStars />
              </span>
              {isOpen && <span className="nav-text">At your service</span>}
            </Link>
          </li>
        
        
        </div>
        </div>}







      {isOpen && (
        <div className="upgrade-section">
          <button className="upgrade-button">
            <span><BiUpArrowCircle />
            </span>Upgrade</button>
          <button className="refer-button">
            Refer a friend & earn more Coins
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
