import React from 'react';
import styles from'./App.module.css';
import StatusColumn from "./components/StatusColumn/StatusColumn";

function App(props) {

    const {columns} = props.state;
    const columnItems = columns.map(column => <StatusColumn
        column={column}
        dispatch={props.dispatch}/>);

    return (
        <div className={styles.app}>
            {columnItems}
        </div>
    );
}

export default App;
