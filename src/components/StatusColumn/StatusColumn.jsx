import React from 'react';
import Card from "../Card/Card";
import Input from "../Input/Input";
import statusColumnStyle from "./StatusColumn.module.css"

const StatusColumn = (props) => {
    const {column, items, addTask, updateTask} = props;
    const cards = items.map((item, index) => <Card key={index} item={item}/>);
    return (
        <div className={statusColumnStyle.statusColumn}>
            <div className={statusColumnStyle.caption}>
                {column.caption}
            </div>
            <Input
                column={column}
                addTask={addTask}
                updateTask={updateTask}/>
            <div className={statusColumnStyle.toDoCards}>
                {cards}
            </div>
        </div>
    );
};

export default StatusColumn;
