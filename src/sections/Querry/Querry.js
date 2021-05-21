import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import QuerryForm from '../../components/QuerryForm/QuerryForm'


function Querry()
{
    return (
        <React.Fragment>
            <SectionHeader htext={"couldn't find your desired domain?Let us know"} spacing={"80px"}/>
            <QuerryForm/>
        </React.Fragment>
    );
}

export default Querry;