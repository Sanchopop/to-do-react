import StatusColumn from "../StatusColumn/StatusColumn";
import TableStyles from "../Table/Table.module.css";
import React from "react";
import EditModalWindow from "../EditModalWindow/EditModalWindow";

const Table = (props) => {
    const {columns, items, addTask, updateTask, showModal, hideModal} = props;
    const statusColumn = columns.map((column, index) => {
        const temp = items.filter(item => column.caption === item.status);
        return <StatusColumn key={index} column={column} items={temp} addTask={addTask} updateTask={updateTask} showModal={showModal}/>
    });
    return (
        <div className={TableStyles.table}>
            {statusColumn}
            <EditModalWindow hideModal={hideModal}/>
        </div>
    );
};

export default Table;
