import React from 'react';
import './RegisterForm.css';
import details from '../SiteData';

function RegisterForm(){

    const[uname, setUname] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[mobile, setMobile] = React.useState('');
    const[domain, setDomain] = React.useState('');
    const[message, setMessage] = React.useState('');

    const[activeTab, setActiveTab] = React.useState(0);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const formUrl = details.registerUrl;
        fetch(formUrl,{
            method: "POST",
            mode: "no-cors",
            header:{
                'Content-Type': 'application/json'
                },
            body: getInputData()
        })
        .then(data=>{
            alert("Thank You For Registering");
        })
        .catch(err=>console.error(err)); //promise based
    }
    function getInputData(){
        let dataToPost = new FormData(); //formdata API

        //fill name attributes to corresponding values
        dataToPost.append("entry.888186195" , uname);
        dataToPost.append("entry.163301334" , email);
        dataToPost.append("entry.1245754527" , mobile);
        dataToPost.append("entry.1516007880" , domain);
        dataToPost.append("entry.1462981909" , message);

        return dataToPost;
    }

    return(
        <form id="register-ms-form" autoComplete="off"
        method="POST"
        action={details.registerUrl}
        onSubmit={SubmitHandler}
        >
            <div className={activeTab === 0 ? "f-tab" : "f-tab hidden"}>
                <div className="form-group">
                    <h3 style={{color: "#ececec"}}>Welcome</h3>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" 
                    name="entry.1981860985"
                    placeholder="Name" 
                    onChange = {e => setUname(e.target.value)}
                    value={uname}
                    required />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" 
                    name="entry.848792246"
                    placeholder="Email" 
                    onChange = {e => setEmail(e.target.value)}
                    value={email}
                     />
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" 
                    name="entry.34711981"
                    placeholder="Phone number" 
                    onChange = {e => setMobile(e.target.value)}
                    value={mobile}
                    required />
                </div>
                <div className="form-group">
                    <button className="next" onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(1);
                        }
                    }>
                        Next
                    </button>
                </div>
            </div>
            <div className={activeTab === 1 ? "f-tab" : "f-tab hidden"}>
                <div className="form-group">
                    <select className="form-select" name="entry.635069527"
                    onChange = {e => setDomain(e.target.value)}
                    value={domain}>
                        <option defaultValue>Domain</option>
                        <option value="Domain 1">Domain 1</option>
                        <option value="Domain 2">Domain 2</option>
                        <option value="Domain 3">Domain 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="msg" 
                    name="entry.2139896364" rows={6} 
                    placeholder="Message"
                    onChange = {e => setMessage(e.target.value)}
                    value={message}/>
                </div>
                <div className="form-group ms-form-btn-grp">
                    <button className="previous" onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(0)
                        }
                    }>
                        Previous
                    </button>
                    <button type="submit" className="next">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;