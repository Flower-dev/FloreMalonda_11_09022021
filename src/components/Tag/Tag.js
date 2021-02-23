import React from 'react';
import './Tag.css';


function Tag(props) {
    return (
        <div className="tag">
            <p>{props.content}</p>
        </div>
    )
}

export default Tag;

