import React from 'react';
import './BenefitBlock.css';

function BenefitBlock({BlockText})
{
    return (
        <div className="block-wrapper">
            {BlockText}
        </div>
    );
}

export default BenefitBlock;