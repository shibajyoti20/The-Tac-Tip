import React from 'react';
import share from '../../static/images/share.png';
import insta from '../../static/images/insta.png';
import fb from '../../static/images/facebook.png';
import linkedin from '../../static/images/linkedin.png';
import './MediaSection.css';

function MediaSection()
{
    return (
        <div className="media-wrapper">
            <div className="line1">
                Share with your freinds.
                <img src={share} className="social" alt="share-image"/>
            </div>
            <div className="line2">
                Follow us on 
                <img src={insta} className="social" alt="Instagram"/>
                <img src={fb} className="fb" alt="facebook"/>
                <img src={linkedin} className="social" alt="LinkedIn"/>
            </div>
        </div>
    );
}

export default MediaSection;