import StatusColumn from "../StatusColumn/StatusColumn";
import TableStyles from "../Table/Table.module.css";
import React from "react";

const Table = (props) => {
    const {columns, items, addTask, updateTask} = props;
    const statusColumn = columns.map((column, index) => {
        const temp = items.filter(item => column.caption === item.status);
        return <StatusColumn key={index} column={column} items={temp} addTask={addTask} updateTask={updateTask}/>
    });
    return (
        <div className={TableStyles.table}>
            {statusColumn}
        </div>
    );
};

export default Table;