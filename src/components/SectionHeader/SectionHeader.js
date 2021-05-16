import React from 'react';
import './SectionHeader.css';

function SectionHeader({htext, spacing}){
    return(
        <div className="section-header" style={{marginTop : spacing}}>
            {htext}
        </div>
    );
}

export default SectionHeader;