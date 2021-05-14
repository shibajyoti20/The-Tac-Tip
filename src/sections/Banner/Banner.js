import React from 'react';
import './Banner.css';
import Navbar from '../../components/Navbar/Navbar';
import HeroText from '../../components/HeroText/HeroText';

import MouseIcon from '../../static/images/scroll down.png';

function Banner()
{
    return(
        <div className="banner-wrapper">
            <Navbar/>
            <HeroText/>
            <div className="mouse-icon">
                <img src={MouseIcon} alt="Mouse"/>
            </div>
        </div>
    );
}

export default Banner