import React from 'react';
import InputStyle from "./Inputs.module.css"
import {addTaskActionCreator, onTaskChangeActionCreator} from "../../data";

const Input = (props) => {

    const newTask = React.createRef();

    const addTask = () => {
        const column = props.column;
        props.dispatch(addTaskActionCreator(column));
    };

    const onTaskChange = () => {
        const column = props.column;
        const taskText = newTask.current.value;
        props.dispatch(onTaskChangeActionCreator(taskText, column));
    };

    return (
        <div className={InputStyle.inputRow}>
            <input type="text"
                   ref={newTask}
                   placeholder={props.column.inputValue}
                   className={InputStyle.input}
                   onChange={onTaskChange}/>
            <button className={InputStyle.addButton}
                    onClick={addTask}>
                +
            </button>
        </div>
    )
};

export default Input;
