import React from 'react';
import './VideoModal.css';

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Bh6RmdTLSuM"
            title="Anson Hunter Video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
