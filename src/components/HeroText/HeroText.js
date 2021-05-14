import React from 'react';
import './HeroText.css';


function HeroText()
{
    return (
        <div className="hero-wrapper">
            <div className="header-wrapper">
                <div className="header-content">Stuck Somewhere?</div> 
                <div className="header-content">Ask The Experts.</div>
            </div>
            <div className="subheader-wrapper">
                Contact our team of experts, clear all your doubts, and solve all
                 your problems. Together, Let's crack it!
            </div>
            <button className="submit-btn">
                Register
            </button>
        </div>
    );
}

export default HeroText;