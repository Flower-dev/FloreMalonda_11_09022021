import React from 'react';
import './Stars.css';

// -------------------------------------------

const ColoredStar = () => {
    return <img src="../stars.png" alt="stars" />
}

const EmptyStar = () => {
    return <img src="../star-empty.png" alt="stars" />
}

export default function Stars(props) {

    return (
        <div className="stars">
            {Array.from({length: parseInt(props.rating)}, (v, idx) => <ColoredStar key={'colored-' + idx}/>)}
            {Array.from({length: 5 - parseInt(props.rating)}, (v, idx) => <EmptyStar key={'empty-' + idx}/>)}
        </div>
    )
};

