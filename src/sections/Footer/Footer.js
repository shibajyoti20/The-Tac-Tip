import React from 'react';
import logo from '../../static/images/thetactip_logo.png';
import name from '../../static/images/thetactip.png';
import './Footer.css';

function Footer()
{
    return (
        <div className="footer-wrapper">
            <img src={logo} className="logo" alt="brand-logo"/><br/>
            <img src={name} className="name" alt="brand-name"/><br/>
            Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2021 TheTacTip
        </div>
    );
}

export default Footer;