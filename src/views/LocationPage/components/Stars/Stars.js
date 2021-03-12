import React from 'react';
import './Stars.css';

const ColoredStar = () => {
    return <img src="../stars.png" alt="stars" />
}

const EmptyStar = () => {
    return <img src="../star-empty.png" alt="stars" />
}

function Stars(props) {

    return (
        <div className="stars">
            {Array.from({length: parseInt(props.rating)}, () => <ColoredStar />)}
            {Array.from({length: 5 - parseInt(props.rating)}, () => <EmptyStar />)}
        </div>
    )
};

export default Stars;
