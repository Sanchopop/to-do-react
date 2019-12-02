import {connect} from "react-redux";
import Table from "./Table.jsx";
import React from "react";
import {addTaskActionCreator, onTaskChangeActionCreator, hideModal, showModal} from "../../redux/redux-store";

const TableContainer = (props) => {
    const {columns, items, addTask, updateTask, showModal, hideModal} = props;
    return <Table columns={columns} items={items} addTask={addTask} updateTask={updateTask} showModal={showModal} hideModal={hideModal}/>
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
        },
        hideModal: () => dispatch(hideModal()),
        showModal: () => dispatch(showModal())

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
