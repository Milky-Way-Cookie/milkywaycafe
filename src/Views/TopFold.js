import React, { useState } from 'react';
import './TopFold.css';
import milkyWayLogo from '../assets/images/logo512.png';
import VideoModal from '../components/VideoModal'; 
import Banner from '../components/Banner';
import PersonalG from './PersonalG';
import resumeImage from '../assets/images/Resume.png';
import projectImage from '../assets/images/Aboutme.png';
import channelImage from '../assets/images/Channel.png';


const TopFold = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <div className="topfold-container">
    <Banner /> 
    <div className="top-bar">

        <img src={milkyWayLogo} alt="MilkyWayCafe Logo" className="logo" />
        <div className="top-bar-buttons">
          <a className="btn content-catalog" href="https://github.com/Milky-Way-Cookie" target="_blank" rel="noopener noreferrer">My Github Page</a>
          <a className="btn take-website" href="https://drive.google.com/file/d/1hT6Fzj2bjPIARvZa5CnrTlt9TcbPMEN7/view?usp=sharing" target="_blank" rel="noopener noreferrer">View an Award</a>
        </div>
      </div>

      <div className="separator"></div>

      <div className="main-section">
        <div className="gradient-box">
          <h1 className="main-title">{'MilkyWayCafe'}</h1>
          <p className="main-subtitle">My Name is Anson Li, and This is My First Personal Website, Enjoy Your Visit! Be Aware That There May Be Future Updates To This Website!</p>

          <button className="black-btn" onClick={() => setVideoOpen(true)}>
            <span className="play-icon">&#9658;</span>
            <div className="btn-text">
              <span className="btn-main-text">Watch Video</span>
              <span className="btn-sub-text">10 seconds</span>
            </div>
          </button>
        </div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setVideoOpen(false)} />
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '40px 0' }}>
        <PersonalG
            image={resumeImage}
            title="Resume"
            description="Explore my professional background, experience and education."
            link="https://drive.google.com/file/d/1Gm8nzF6vmh5TttS9j-ZnK-MitDa7jTnY/view?usp=sharing"
        />
        <PersonalG
            image={projectImage}
            title="About Me"
            description="A little intro about myself."
            link="https://docs.google.com/document/d/1hzrGh2Lx1NSD8swyUOjrCpaETAaDSSXxCsvylC8jwJ0/edit?usp=sharing"
        />
        <PersonalG
            image={channelImage}
            title="Channel"
            description="Check out my old channel to see some of my personal hobbies."
            link="https://www.youtube.com/@ansonhunter250"
        />
        </div>

    </div>
  );
};

export default TopFold;