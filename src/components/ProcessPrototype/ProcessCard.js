import React from 'react';
import './ProcessCard.css';

function Process({ CardHeader, CardImage, CardCaption }){
    return(
        <div className="card-wrapper">
            <div className="card-header">
                { CardHeader }
            </div>
            <div className="card-image">
                <img src={ CardImage } alt="process-of-registration" />
            </div>
            <div className="card-caption">
                {  CardCaption }
            </div>
        </div>
    );
}

export default Process;