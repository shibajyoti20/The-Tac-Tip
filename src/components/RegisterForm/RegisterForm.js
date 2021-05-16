import React from 'react';
import './RegisterForm.css';
function RegisterForm(){

    const[uname, setUname] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[mobile, setMobile] = React.useState('');
    const[domain, setDomain] = React.useState('');
    const[message, setMessage] = React.useState('');

    const[activeTab, setActiveTab] = React.useState(0);

    return(
        <form id="register-ms-form" autoComplete="off">
            <div className={activeTab === 0 ? "f-tab" : "f-tab hidden"}>
                <div class="form-group">
                    <h3 style={{color: "#ececec"}}>Welcome</h3>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="uname"
                    placeholder="Name" 
                    onChange = {e => setUname(e.target.value)}
                    value={uname}
                    required />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email"
                    placeholder="Email" 
                    onChange = {e => setEmail(e.target.value)}
                    value={email}
                     />
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" name="mobile"
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
                    <select class="form-select" name="domain"
                    onChange = {e => setDomain(e.target.value)}
                    value={domain}>
                        <option selected>Domain</option>
                        <option value="1">Domain 1</option>
                        <option value="2">Domain 2</option>
                        <option value="3">Domain 3</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea className="form-control" id="msg" name="message" rows={6} 
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
                    <button className="next">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default RegisterForm;