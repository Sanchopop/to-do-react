import StatusColumn from "../StatusColumn/StatusColumn";
import TableStyles from "../Table/Table.module.css";
import React from "react";
import EditModalWindow from "../EditModalWindow/EditModalWindow";

const Table = (props) => {

    const {columns, items, addTask, updateTask, showModal, hideModal, modalStatus, editItem, editColumn, cardEdit} = props;

    let elementToShow ;

    if(modalStatus) {
        elementToShow = <EditModalWindow hideModal={hideModal} editItem={editItem} editColumn={editColumn} columns={columns} cardEdit={cardEdit}/>;
    } else {
        elementToShow = columns.map((column, index) => {
            const temp = items.filter(item => column.caption === item.status);
            return <StatusColumn key={index} column={column} items={temp} addTask={addTask} updateTask={updateTask}
                                 showModal={showModal}/>
        });
    }

    return (
        <div className={TableStyles.table}>
            {elementToShow}
        </div>
    );
};

export default Table;
