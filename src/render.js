import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addTask, updateNewTaskText} from "./data";

export let renderTree = (Data) => {
    ReactDOM.render(<App
        data={Data}
        addTask={addTask}
        updateNewTaskText={updateNewTaskText}/>,
        document.getElementById('root'));
};
