import React from 'react';
import './Domains.css';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Catalogue from '../../components/ServicesCatalogue/Catalogue';
import DomainCard from '../../components/DomainCard/DomainCard';
import details from '../../components/SiteData';

function Domains(){
    return(
        <div className="domains-wrapper">
            <Catalogue/>
            <SectionHeader htext={"Our Domains"} spacing={"60px"} />
            <div className="domains-wrapper">
                <DomainCard dhead={"Design"} dtext={details.domainsDesc.ddesc1} 
                dimg={details.domainsImg.dimg1} />

                <DomainCard dhead={"Develop"} dtext={details.domainsDesc.ddesc2} 
                dimg={details.domainsImg.dimg2} />
            </div>
        </div>
    );
}

export default Domains;