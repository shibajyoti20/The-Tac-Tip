import React from 'react';
import Catalogue from '../../components/ServicesCatalogue/Catalogue';
import Process from '../../components/Process/Process';

function Services(){
    return (
        <div className="services-wrapper">
            <Catalogue/>
            <Process/>
        </div>
    );
}

export default Services;