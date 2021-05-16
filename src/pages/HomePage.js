import React from 'react';
import Banner from '../sections/Banner/Banner';
import Services from '../sections/Services/Services';
import Domains from '../sections/Domains/Domains';

function HomePage() {
    return(
        <React.Fragment>
            <Banner/>
            <Domains/>
            <Services/>
        </React.Fragment>
    );
}

export default HomePage;