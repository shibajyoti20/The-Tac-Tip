import React from 'react';
import Comments from '../../components/Comments/Comments';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

function Carousel()
{
    return (
        <React.Fragment>
            <SectionHeader htext={"What others say about us"} spacing={"100px"}/>
            <Comments/>
        </React.Fragment>
    );
}

export default Carousel;