import React from 'react';
import InputStyle from "./Inputs.module.css"

const Input = (props) => {
    const {column, addTask, updateTask} = props;
    const newTask = React.createRef();
    const error = React.createRef();

    const addNewTask = () => {
        const newTaskLength = newTask.current.value.length;
        if (newTaskLength < 3 || newTaskLength > 40) {
            error.current.style.display = 'flex';
        } else {
            addTask(column.caption);
            newTask.current.value = '';
        }
    };

    const onTaskChange = (e) => {
        error.current.style.display = 'none';
        if (e.key === 'Enter') addNewTask();
        console.log(newTask.current.value);
        updateTask(newTask.current.value);
    };

    return (
        <div className={InputStyle.inputRow}>
            <input type="text"
                   ref={newTask}
                   placeholder={column.placeholder}
                   className={InputStyle.input}
                   onKeyPress={onTaskChange}/>
            <button className={InputStyle.addButton}
                    onClick={addNewTask}>
                +
            </button>
            <span ref={error} className={InputStyle.invalid}>Invalid Task Name!</span>
        </div>
    )
};

export default Input;
