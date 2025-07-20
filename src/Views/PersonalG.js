import React from 'react';
import './PersonalG.css';

const PersonalG = ({ image, title, description, link }) => {
  return (
    <div className="personalg-card">
      <img src={image} alt={title} className="personalg-image" />
      <div className="personalg-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="personalg-link">
          {link}
        </a>
      </div>
      <div className="personalg-footer">View Item</div>
    </div>
  );
};

export default PersonalG;
