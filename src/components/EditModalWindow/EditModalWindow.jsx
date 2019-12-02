import React from 'react';
import EditModalWindowStyle from './EditModalWindow.module.css'

const EditModalWindow = (props) => {

    const {hideModal} = props;

    const closeModal = () => {
        hideModal();
    };

    return (
        <div className={EditModalWindowStyle.modal}>
            <div className={EditModalWindowStyle.editWindow}>
                <i className="far fa-times-circle" onClick={closeModal}/>
                <input type="text" placeholder={'Edit Name'} className={EditModalWindowStyle.name}/>
                <div>
                    <button className={EditModalWindowStyle.statusButton}>Done</button>
                    <button className={EditModalWindowStyle.statusButton}>In Progress</button>
                </div>
            </div>
        </div>
    );
};

export default EditModalWindow;
