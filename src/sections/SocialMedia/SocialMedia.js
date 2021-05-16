import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import MediaSection from '../../components/MediaSection/MediaSection'

function SocialMedia()
{
    return (
        <React.Fragment>
            <SectionHeader htext={"help us grow"} spacing={"100px"}/>
            <MediaSection/>
        </React.Fragment>
    );
}

export default SocialMedia;