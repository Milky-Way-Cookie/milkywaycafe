import React, { useState } from 'react';
import './TopFold.css';
import milkyWayLogo from '../assets/images/logo512.png';
import VideoModal from '../components/VideoModal'; 

const TopFold = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <div className="topfold-container">
      {/* Top bar */}
      <div className="top-bar">
        <img src={milkyWayLogo} alt="MilkyWayCafe Logo" className="logo" />
        <div className="top-bar-buttons">
          <a className="btn content-catalog" href="https://github.com/Milky-Way-Cookie" target="_blank" rel="noopener noreferrer">My Github Page</a>
          <button className="btn take-website">Take This Website</button>
        </div>
      </div>

      {/* White line */}
      <div className="separator"></div>

      {/* Main section */}
      <div className="main-section">
        <div className="gradient-box">
          <h1 className="main-title">{'{automate everything}'}</h1>
          <p className="main-subtitle">Based in Canada, MilkyWayCafe creates a fun environment for all.</p>

          {/* Button to open modal */}
          <button className="black-btn" onClick={() => setVideoOpen(true)}>
            <span className="play-icon">&#9658;</span>
            <div className="btn-text">
              <span className="btn-main-text">Watch Video</span>
              <span className="btn-sub-text">1 minute</span>
            </div>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setVideoOpen(false)} />
    </div>
  );
};

export default TopFold;