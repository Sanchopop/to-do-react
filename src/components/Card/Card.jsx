import React from 'react';
import CardStyle from './Card.module.css'
import Moment from 'react-moment';

const Card = (props) => {
    const {item, showModal} = props;
    const calendarStrings = {
        lastDay : '[Yesterday]',
        sameDay : '[Today]',
        nextDay : '[Tomorrow]',
        lastWeek : '[last] dddd []',
        nextWeek : 'dddd []',
        sameElse : 'L'
    };

    const openModal = () => {
      showModal();
    };

    return (
        <div className={CardStyle.card} onClick={openModal}>
            <div className={CardStyle.cardText}>
            <span className={CardStyle.name}>
                {item.name}
            </span>
                <Moment calendar={calendarStrings} className={CardStyle.time}>
                    {item.time}
                </Moment>
            </div>
            <i className="fas fa-pencil-alt"/>
        </div>
    );
};

export default Card;
