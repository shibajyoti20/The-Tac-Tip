import React from 'react';
import './Process.css';
import details from '../CardDetails';
import ProcessCard from '../ProcessPrototype/ProcessCard';
import SectionHeader from '../SectionHeader/SectionHeader';

function Process(){
    return(
        <div className="process-wrapper">
            <SectionHeader htext={"Process"} spacing={"0px"}/>
            
            <div className="process-card-wrapper">
                
                <ProcessCard CardHeader={"Register"} 
                CardImage={details.imageUrl.RegisterImg} 
                CardCaption={details.captions.RegisterCaption} />

                <ProcessCard CardHeader={"Verify"} 
                CardImage={details.imageUrl.VerifyImg} 
                CardCaption={details.captions.VerifyCaption}/>

                <ProcessCard CardHeader={"Session"} 
                CardImage={details.imageUrl.SessionImg} 
                CardCaption={details.captions.SessionCaption}/>

                <ProcessCard CardHeader={"Payment"} 
                CardImage={details.imageUrl.PaymentImg} 
                CardCaption={details.captions.PaymentCaption}/>

            </div>
        </div>
    );
}

export default Process;