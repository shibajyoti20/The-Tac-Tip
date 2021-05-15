import React from 'react';
import './DomainCard.css';

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
                <button className="domaincard-btn">
                    Register
                </button>
            </div>
            <div className='domaincard-right'>
                <img src={dimg} alt="domain-img" />
            </div>
        </div>
    );
}

export default DomainCard;