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
  FaLock,
} from "react-icons/fa";
import {
  MdLibraryBooks,
  MdNotifications,
  MdGroups,
  MdMarketplace,
} from "react-icons/md";
import { BiUpArrowCircle } from "react-icons/bi";

import { BsShop, BsStars } from "react-icons/bs";

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
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {isOpen && (
        <div className="sidebar-sub-container">
          <div className="Profile-main-sectio">
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
                <li className="nav-item" >
                  <Link to="/library" className="lock-main">
                    <span className="nav-icon">
                      <FaBook />
                    </span>
                    {isOpen && <span className="nav-text">My Library</span>}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/smart-review" className="lock-main">
                    <span className="nav-icon" style={{display:"flex", alignItems:"center", columnGap:".7rem"}}>
                      <MdLibraryBooks />
                      {isOpen && <span className="nav-text">Smart Review</span>}
                    </span>
                    <span> <FaLock className="Loca-icon"/></span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/hosted-sessions" className="lock-main">
                    <span className="nav-icon" style={{display:"flex", alignItems:"center", columnGap:".7rem"}}>
                      <FaVideo />
                      {isOpen && (
                      <span className="nav-text">Hosted Sessions</span> 
                    )}
                    </span>
                   
                    <span> <FaLock   className="Loca-icon"/></span>

                  </Link>
                </li>
              </div>
              <div>
                <li className="nav-item create-Battle">
                  <Link to="/battle" className="lock-main">
                    <span className="nav-icon">
                      <FaBrain />
                    </span>
                    {isOpen && (
                      <span className="nav-text">Battle of the Brains</span>
                    )}
                  </Link>
                </li>
              </div>

              <div className="Profile-main-section">
                <li className="nav-item">
                  <Link to="/groups" className="lock-main">
                    <span className="nav-icon" style={{display:"flex", alignItems:"center", columnGap:".7rem"}}>
                      <MdGroups />
                      {isOpen && <span className="nav-text">Groups</span>}

                    </span>
                    <span> <FaLock   className="Loca-icon"/></span>

                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/marketplace" className="lock-main">
                    <span className="nav-icon" style={{display:"flex", alignItems:"center", columnGap:".7rem"}}>
                      <BsShop />
                      {isOpen && <span className="nav-text">Marketplace</span>}

                    </span>
                    <span> <FaLock   className="Loca-icon"/></span>

                  </Link>
                </li>
              </div>

              <div className="Profile-main-section">
                <li className="nav-item">
                  <Link to="/rewards" className="lock-main">
                    <span className="nav-icon">
                      <FaTrophy />
                    </span>
                    {isOpen && <span className="nav-text">Rewards</span>}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/notifications"  className="lock-main">
                    <span className="nav-icon" style={{display:"flex", alignItems:"center", columnGap:".7rem"}}>
                      <MdNotifications />
                      {isOpen && <span className="nav-text">Notifications</span>}

                    </span>
                    <span> <FaLock   className="Loca-icon"/></span>

                  </Link>
                </li>

              

                <li className="nav-item">
                  <Link to="/profile" className="lock-main">
                    <span className="nav-icon">
                      <FaUserAlt />
                    </span>
                    {isOpen && <span className="nav-text">Profile</span>}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/settings" className="lock-main">
                    <span className="nav-icon" style={{display:"flex", alignItems:"center", columnGap:".7rem"}}>
                      <FaCogs />
                      {isOpen && <span className="nav-text">Settings</span>}

                    </span>
                    <span> <FaLock   className="Loca-icon"/></span>

                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/how-to-use" className="lock-main">
                    <span className="nav-icon">
                      <BiHelpCircle />
                    </span>
                    {isOpen && <span className="nav-text">How to Use</span> }     

                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/support-hub" className="lock-main">
                    <span className="nav-icon">
                      <FaWallet />
                    </span>
                    {isOpen && <span className="nav-text">Support Hub</span>}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/logout" className="lock-main">
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
          {isOpen && (
            <div className="other-links">
              <div className="Profile-main-section">
                <li className="nav-item">
                  <Link to="/library">
                    <span className="nav-icon">
                      <BsStars />
                    </span>
                    {isOpen && (
                      <span className="nav-text">At your service</span>
                    )}
                  </Link>
                </li>
              </div>
            </div>
          )}

          {isOpen && (
            <div className="upgrade-section">
              <button className="upgrade-button">
                <span>
                  <BiUpArrowCircle />
                </span>
                Upgrade
              </button>
              <button className="refer-button">
                Refer a friend & earn more Coins
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
