import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';


export default function Tag ({ tag }) {
    return (
        <div className="tag">
            <p>{tag}</p>
        </div>
    )
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
}