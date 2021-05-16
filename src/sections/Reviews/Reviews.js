import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import BenefitBlock from '../../components/BenefitBlock/BenefitBlock';
import details from '../../components/SiteData';

function Reviews(){
    return (
        <React.Fragment>
            <SectionHeader htext={"why choose us?"} spacing={"100px"}/>
            {details.BenefitBlock.map(item => (
                <BenefitBlock BlockText={item.block}/>
            ))}
        </React.Fragment>
    );
}

export default Reviews;