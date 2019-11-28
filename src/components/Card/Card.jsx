import React from 'react';
import CardStyle from './Card.module.css'
import Moment from 'react-moment';

const Card = (props) => {
    const {name, time} = props.item;
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
            <div className={CardStyle.cardText}>
            <span className={CardStyle.name}>
                {name}
            </span>
                <Moment calendar={calendarStrings} className={CardStyle.time}>
                    {time}
                </Moment>
            </div>
            <i className="fas fa-pencil-alt"></i>
        </div>
    );
};

export default Card;
