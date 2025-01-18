import React from "react";
import { BsStars, BsTrash } from "react-icons/bs";
import { GrEdit } from "react-icons/gr";
import { FaPlay } from "react-icons/fa";
import noImg from './no-img.png'




const MyLibrary = () => {
  return (
    <div className="library-wrapper">
      <h2></h2>
      <div className="items-list">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="item-card">
            <div className="item-thumbnail">
              <div className="thumbnail-placeholder"> <img src={noImg} /></div>
            </div>
            <div className="item-details">
              <div className="item-title">Energy Transfer</div>
              <div className="item-meta">Easy | 20 Questions | 60s</div>
             <div className="item-meta-small">
             <h3>MCQs</h3><div className="item-date">
              <span><strong>Created by: </strong> Rahul | Genre: Tech </span>
              <br/>
              <span><strong>Created on: </strong> 07/08/2024 | 1:05 PM</span>
              </div>
              </div>
              
            </div>
            <div className="item-actions">
            <button className="delete-btn"><BsTrash />
            </button>
              <button className="btn edit-btn"><span className="Edit-play-icon"><GrEdit />
              </span>Edit</button>
              <button className="btn play-btn">
                <span className="Edit-play-icon"><FaPlay /></span>


              Play</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLibrary;
