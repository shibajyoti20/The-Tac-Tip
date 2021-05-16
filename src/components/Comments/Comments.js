import React from 'react';
import './Comments.css';
import CardDetails from '../CardDetails';
import details from '../CardDetails';


function Comments()
{
    return (
        <div className="carousel-wrapper">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {details.Comments.map( (item,idx) => (
                        <div className={idx===0 ? "carousel-item active": "carousel-item"}>
                            <div className="comments-wrapper">
                                <div className="comments-author">
                                    {item['carousel-header']}
                                </div>
                                <div className="comments-desc">
                                    {item['carousel-desc']}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        
    );
}

export default Comments;