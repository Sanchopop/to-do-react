import {connect} from "react-redux";
import Table from "./Table.jsx";
import React from "react";
import {addTaskActionCreator, onTaskChangeActionCreator, hideModal, showModal, cardEdit} from "../../redux/redux-store";

const TableContainer = (props) => {
    const {columns, items, addTask, updateTask, showModal, hideModal, modalStatus, editItem, editColumn, cardEdit} = props;
    return <Table columns={columns}
                  items={items}
                  addTask={addTask}
                  updateTask={updateTask}
                  showModal={showModal}
                  hideModal={hideModal}
                  modalStatus={modalStatus}
                  editItem={editItem}
                  editColumn={editColumn}
                  cardEdit={cardEdit}/>
};

const mapStateToProps = ({modalStatus, columns, items, editItem, editColumn}) => {
    return {
        editItem,
        editColumn,
        modalStatus,
        columns,
        items
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
        showModal: (item, column) => dispatch(showModal(item, column)),
        cardEdit: (newStatus, newValue) => dispatch(cardEdit(newStatus, newValue))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
