import {connect} from "react-redux";
import Table from "./Table.jsx";
import React from "react";
import {addTaskActionCreator, onTaskChangeActionCreator} from "../../redux/column-reducer";

const TableContainer = (props) => {
    const {columns, items, addTask, updateTask} = props;
    return <Table columns={columns} items={items} addTask={addTask} updateTask={updateTask}/>
};

const mapStateToProps = (state) => {
    return {
        columns: state.columns,
        items: state.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (status) => {
            dispatch(addTaskActionCreator(status));
        },
        updateTask: (newTaskText) => {
            dispatch(onTaskChangeActionCreator(newTaskText));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);