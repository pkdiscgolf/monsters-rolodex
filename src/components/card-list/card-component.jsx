import React from 'react';
import './card-styles.css'

export const Card = props => (
    <div className='card-container'>
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=1set5&size=180x180`} />
        <h2 > 
            { props.monster.name }
        </h2> 
        <p>
            {props.monster.email}
        </p>
        <p>
            {props.monster.phone}
        </p>
        <p>
            {props.monster.website}
        </p>
    </div>
);