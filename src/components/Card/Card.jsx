import React from 'react';
import CardStyle from './Card.module.css'

const Card = (props) => {
    return (
        <div className={CardStyle.card}>
            <span>{props.name}</span>
            <span>{props.time}</span>
        </div>
    );
};

export default Card;
