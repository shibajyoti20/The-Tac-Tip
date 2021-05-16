import React from 'react';
import './HeroText.css';
import {Link} from 'react-router-dom';

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
            <Link to="/register">
                <button className="submit-btn">
                    Register
                </button>
            </Link>
        </div>
    );
}

export default HeroText;