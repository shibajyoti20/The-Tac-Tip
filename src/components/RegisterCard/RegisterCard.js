import React from 'react';
import './RegisterCard.css';
import gateimg from '../../static/images/loginpic.png';
import logo from '../../static/images/favicon.png';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterCard(){
    return(
        <div className="registercard-wrapper">
            <div className="registercard-left">
                <img src={gateimg} alt="register-card-img" />
            </div>
            <div className='registercard-right'>
                <div className="registercard-header">
                    <img src={logo} alt="thetactip-logo" className="tlogo"/>
                    <div className="name">TheTacTip</div>
                </div>
                <RegisterForm />
            </div>
        </div>
    );
}

export default RegisterCard;