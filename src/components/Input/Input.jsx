import React from 'react';
import InputStyle from "./Inputs.module.css"

const Input = (props) => {

    const newTask = React.createRef();

    const addTask = () => {
        props.addTask(props.column);
    };

    const onTaskChange = () => {
        const taskText = newTask.current.value;
        props.updateNewTaskText(taskText, props.column);
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
