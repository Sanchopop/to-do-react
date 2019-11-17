import React from 'react';
import Card from "../Card/Card";
import Input from "../Input/Input";
import statusColumnStyle from "./StatusColumn.module.css"

const StatusColumn = (props) => {

    const cards = props.column.cardsItems.map(card => <Card name={card.name}
                                                            time={card.time}/>);

    return (
        <div className={statusColumnStyle.statusColumn}>
            <div className={statusColumnStyle.caption}>
                {props.column.caption}
            </div>
            <Input
                column={props.column}
                addTask={props.addTask}
                updateNewTaskText={props.updateNewTaskText}/>
            <div className={statusColumnStyle.toDoCards}>
                {cards}
            </div>
        </div>
    );
};

export default StatusColumn;
