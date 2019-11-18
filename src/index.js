import * as serviceWorker from './serviceWorker';
import store from "./data";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderTree = () => {
    ReactDOM.render(<App
            data={store.getData()}
            dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root'));
};

renderTree(store._Data);

store.subscribe(renderTree);

serviceWorker.unregister();
