import React from 'react';
import './QuerryForm.css';

function QuerryForm()
{
    return (
        <div className="section-wrapper">
            We will try to add new domains, sub-domains and features as soon as possible.
            <div className="form-wrapper">
                <form>
                    <input type="text" className="form-control" name="querry" placeholder="e.g. Machine Learning"/><br/><br/>
                    <input type="email" className="form-control" name="mail" placeholder="e-mail"/><br/><br/>
                    <button className="form-btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default QuerryForm;