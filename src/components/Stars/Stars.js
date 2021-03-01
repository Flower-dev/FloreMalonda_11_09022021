import React from 'react';
import './Stars.css';

function Stars(props) {
    return (
        <div className="stars">
            <img src="../stars.png" alt="stars">{props.rating}</img>
        </div>
    )
};

export default Stars;