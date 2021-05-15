import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import DomainCard from '../../components/DomainCard/DomainCard';
import details from '../../components/CardDetails';

function Domains(){
    return(
        <React.Fragment>
            <SectionHeader htext={"Our Domains"} />
            <div className="domains-wrapper">
                <DomainCard dhead={"Design"} dtext={details.domainsDesc.ddesc1} 
                dimg={details.domainsImg.dimg1} />

                <DomainCard dhead={"Develop"} dtext={details.domainsDesc.ddesc2} 
                dimg={details.domainsImg.dimg1} />
            </div>
        </React.Fragment>
    );
}

export default Domains;