import React from 'react';
import BrandName from '../../static/images/thetactip.png';
import BrandLogo from '../../static/images/thetactip_logo.png';
import './Navbar.css';

function Navbar()
{
    return (
        <div className="navbar-wrapper">
            <div className="brand-wrapper">
                <a href="#">
                    <img src={BrandLogo} className="Logo" alt="BrandLogo"/>
                    <img src={BrandName} className="Name" alt="BrandName"/>
                </a>

            </div>
                
            <ul className="list-wrapper">
                <li className="nav-link">
                    about
                </li>
                <li className="nav-link">
                    contact
                </li>
            </ul>
        </div>
    );
}

export default Navbar;