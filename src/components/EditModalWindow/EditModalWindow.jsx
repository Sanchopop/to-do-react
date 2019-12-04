import React from 'react';
import EditModalWindowStyle from './EditModalWindow.module.css'

const EditModalWindow = (props) => {

    const {hideModal, columns, editItem, editColumn, cardEdit} = props;
    const taskName = React.createRef();
    const closeModal = () => {
        hideModal();
    };

    const cardChange = (newStatus) => {
        const newValue = !taskName.current.value.length ? editItem.name : taskName.current.value;

        cardEdit(newStatus, newValue);
        closeModal();
    };

    const buttons = columns.map(column => {
        if (column !== editColumn) {
            return (
                <button className={EditModalWindowStyle.statusButton} onClick={() => cardChange(column.caption)}>{column.caption}</button>
            )
        } return null;
    });

    return (
        <div className={EditModalWindowStyle.modal}>
            <div className={EditModalWindowStyle.editWindow}>
                <i className="far fa-times-circle" onClick={closeModal}/>
                <input ref={taskName} type="text" placeholder={editItem.name} className={EditModalWindowStyle.name}/>
                <div>
                    {buttons}
                </div>
            </div>
        </div>
    );
};

export default EditModalWindow;
