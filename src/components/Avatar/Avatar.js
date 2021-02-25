import React from 'react';
import './Avatar.css';

function Avatar(props){
    return (
        <div className="avatar-container">
            <div className="avatar-name">
                <p>{props.hostname}</p>
            </div>
            <div className="avatar-main">
                <img src={props.hostimg}></img>
            </div>
        </div>
        
    );
    
};

export default Avatar;