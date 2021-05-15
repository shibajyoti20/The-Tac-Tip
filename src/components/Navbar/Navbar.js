import React from 'react';
import BrandName from '../../static/images/thetactip.png';
import BrandLogo from '../../static/images/thetactip_logo.png';
import './Navbar.css';

function Navbar()
{
    return (
        <>
        {/* <div className="navbar-wrapper">
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
        </div> */}
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={BrandLogo} className="Logo" alt="BrandLogo"/>
                        <img src={BrandName} className="Name" alt="BrandName"/>
                    </a>
                    <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav" style={{"width":"40%"}}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
      </>
    );
}

export default Navbar;