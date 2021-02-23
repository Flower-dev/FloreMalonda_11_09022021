import React from 'react';
import './Tag.css';


function Tag(props) {
    return (
        <div className="tag">
            <p className="tag-content">{props.content}</p>
        </div>
    )
}

export default Tag;

