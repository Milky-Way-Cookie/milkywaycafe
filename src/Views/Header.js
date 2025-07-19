import React from 'react';
import './Header.css';
import milkyWay from '../assets/images/Milky-Way-Cookie-V1.png';
import milkyWayLogo from '../assets/images/logo512.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="header-logo">
                    <img src={milkyWayLogo} alt="Webcafe Logo" />
                    <div>{'{automate '}<b>{'everything'}</b>{'.}'}</div>
                </div>
                <div className="header-text">
                    <h1 className="header-Line"><span>Holding</span> <span className="highlight">Company</span>.</h1>
                    <h1 className="header-Line"><span>AI SaaS</span> <span className="highlight">Investor</span></h1>
                    <h1 className="header-Line"><span>MilkyWayCookie</span> <span className="highlight">ai</span>.</h1>
                </div>
            </div>
            <div className="header-image">
                <img src={milkyWay} alt="Webcafe Cup" className="header-img" />
            </div>
        </div>
    );
};

export default Header;