import React from 'react';
import './SectionHeader.css';

function SectionHeader({htext}){
    return(
        <div className="section-header">
            {htext}
        </div>
    );
}

export default SectionHeader;