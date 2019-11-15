import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addTask} from "./data";

export let renderTree = (Data) => {
    ReactDOM.render(<App data={Data} addTask={addTask}/>, document.getElementById('root'));
};
