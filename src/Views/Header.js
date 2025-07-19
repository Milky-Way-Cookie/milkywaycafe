import React from 'react';
import './Header.css';
import milkyWay from '../assets/images/Milky-Way-Cookie-V1.png';
import milkyWayLogo from '../assets/images/logo512.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <img src={milkyWayLogo} alt="Webcafe Logo" />
                    <h2>automate everything.</h2>
                </div>
                <div className="header-text">
                    <h1>The VPN that just works</h1>
                    <p>Exclusive offer: Get 3 extra months FREE</p>
                    <button className="header-button">Start Your Risk-Free Trial</button>
                </div>
            </div>
            <div className="header-image">
                <img src={milkyWay} alt="Webcafe Cup" />
            </div>
        </header>
    );
};

export default Header;