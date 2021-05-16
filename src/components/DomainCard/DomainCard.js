import React from 'react';
import './DomainCard.css';
import {Link} from 'react-router-dom';

function DomainCard({dhead, dtext, dimg}){
    return(
        <div className="domaincard-wrapper">
            <div className="domaincard-left">
                <div className="domaincard-header">
                    { dhead }
                </div>
                <div className="domaincard-desc">
                    { dtext }
                </div>
                <Link to="/register">
                    <button className="domaincard-btn">
                        Register
                    </button>
                </Link>
            </div>
            <div className='domaincard-right'>
                <img src={dimg} alt="domain-img" />
            </div>
        </div>
    );
}

export default DomainCard;