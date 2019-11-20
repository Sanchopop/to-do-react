import React from 'react';
import InputStyle from "./Inputs.module.css"
import {addTaskActionCreator, onTaskChangeActionCreator} from "../../redux/column-reducer";

const Input = (props) => {

    const newTask = React.createRef();

    const addTask = () => {
        const column = props.column;
        props.dispatch(addTaskActionCreator(column));
        newTask.current.value = '';
    };

    const onTaskChange = () => {
        const column = props.column;
        const newTaskText = newTask.current.value;
        props.dispatch(onTaskChangeActionCreator(newTaskText, column));
    };

    return (
        <div className={InputStyle.inputRow}>
            <input type="text"
                   ref={newTask}
                   placeholder={props.column.placeholder}
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
