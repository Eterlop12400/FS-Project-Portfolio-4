import React from 'react';

function Card(props) {
    return (
        <div>
            <img src={props.image} alt={props.imageAlt}/>
            <h2>{props.name}</h2>
            <p>{props.type}</p>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;