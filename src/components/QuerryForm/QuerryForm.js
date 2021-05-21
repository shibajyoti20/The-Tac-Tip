import React from 'react';
import './QuerryForm.css';

function QuerryForm(){

    const[newDomain, setNewDomain] = React.useState('');
    const[nemail, setNEmail] = React.useState('');

    const SubmitHandler = (e) => {
        e.preventDefault();
        const formUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdEWLs1JP1WhxdWeIqOfCMzS5KX5PSQ4ioEc2A_kWTxtwArRg/formResponse";
        fetch(formUrl,{
            method: "POST",
            mode: "no-cors",
            header:{
                'Content-Type': 'application/json'
                },
            body: getInputData()
        })
        .then(data=>{
            alert("Your Request Has Been Received");
            setNewDomain('');
            setNEmail('');
        })
        .catch(err=>console.error(err)); //promise based
    }
    function getInputData(){
        let dataToPost = new FormData(); //formdata API

        //fill name attributes to corresponding values
        dataToPost.append("entry.59700295" , newDomain);
        dataToPost.append("entry.1505150427" , nemail);

        return dataToPost;
    }
    return (
        <div className="section-wrapper">
            We will try to add new domains, sub-domains and features as soon as possible.
            <div className="form-wrapper">
                <form onSubmit={(e) => SubmitHandler(e)}>
                    <input type="text" className="form-control" 
                    name="entry.59700295" placeholder="e.g. Machine Learning"
                    onChange = {(e) => setNewDomain(e.target.value)}
                    value={newDomain}
                    required
                    />
                    <br/><br/>
                    <input type="email" className="form-control" 
                    name="entry.1505150427" placeholder="e-mail"
                    onChange = {(e) => setNEmail(e.target.value)}
                    value={nemail}
                    required
                    />
                    <br/><br/>
                    <button type="submit" className="form-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default QuerryForm;