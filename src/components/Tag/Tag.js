import React from 'react';
import './Tag.css';


export default function Tag (props) {
    return (
        <div className="tag">
            <p>{props.location.tags}</p>
        </div>
    )
}

