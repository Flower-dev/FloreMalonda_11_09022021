import React from 'react';
import './Stars.css';

function Stars(props) {
    return (
        <div>
            <img src="../stars.png" alt="stars">{props.rating}</img>
        </div>
    )
};

export default Stars;