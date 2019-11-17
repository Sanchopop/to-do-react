import React from 'react';
import CardStyle from './Card.module.css'
import Moment from 'react-moment';

const Card = (props) => {

    const calendarStrings = {
        lastDay : '[Yesterday]',
        sameDay : '[Today]',
        nextDay : '[Tomorrow]',
        lastWeek : '[last] dddd []',
        nextWeek : 'dddd []',
        sameElse : 'L'
    };

    return (
        <div className={CardStyle.card}>
            <span>
                {props.name}
            </span>
            <Moment calendar={calendarStrings}>
                {props.time}
            </Moment>
        </div>
    );
};

export default Card;
