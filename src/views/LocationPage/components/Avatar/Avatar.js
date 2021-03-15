import React from 'react';
import './Avatar.css';

// -------------------------------------------

export default function Avatar(props){
    return (
        <div className="avatar-container">
            <div className="avatar-name">
                <p>{props.name}</p>
            </div>
            <div className="avatar-main">
                <img src={props.picture}></img>
            </div>
        </div>
        
    );
    
};
