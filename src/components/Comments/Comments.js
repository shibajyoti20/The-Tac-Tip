import React from 'react';
import './Comments.css';
import details from '../SiteData';


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
            </div>
        </div>
        
    );
}

export default Comments;