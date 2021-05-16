import React from 'react';
import Banner from '../sections/Banner/Banner';
import Services from '../sections/Services/Services';
import Domains from '../sections/Domains/Domains';
import Reviews from '../sections/Reviews/Reviews';
import Carousel from '../sections/Carousel/Carousel';
import Querry from '../sections/Querry/Querry';
import SocialMedia from '../sections/SocialMedia/SocialMedia';
import Footer from '../sections/Footer/Footer';

function HomePage() {
    return(
        <React.Fragment>
            <Banner/>
            <Domains/>
            <Reviews/>
            <Services/>
            <Carousel/>
            <Querry/>
            <SocialMedia/>
            <Footer/>
        </React.Fragment>
    );
}

export default HomePage;