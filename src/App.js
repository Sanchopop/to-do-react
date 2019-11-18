import React from 'react';
import styles from'./App.module.css';
import StatusColumn from "./components/StatusColumn/StatusColumn";

function App(props) {

    const column = props.data.map(column => <StatusColumn
        column={column}
        dispatch={props.dispatch}/>);

    return (
        <div className={styles.app}>
            {column}
        </div>
    );
}

export default App;
