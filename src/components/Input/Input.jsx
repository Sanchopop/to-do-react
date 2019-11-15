import React from 'react';
import InputStyle from "./Inputs.module.css"

const Input = (props) => {

    const newTask = React.createRef();

    const addTask = () => {
        const taskText = newTask.current.value;
        const date = new Date();
        const time = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
        props.addTask(taskText, time, props.column);
        newTask.current.value = '';
    };

    return (
        <div className={InputStyle.inputRow}>
            <input type="text" ref={newTask} placeholder={props.column.inputValue} className={InputStyle.input}/>
            <button className={InputStyle.addButton} onClick={addTask}>+</button>
        </div>
    )
};

export default Input;
