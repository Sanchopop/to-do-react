import React from 'react';
import EditModalWindowStyle from './EditModalWindow.module.css'

const EditModalWindow = (props) => {

    return (
        <div className={EditModalWindowStyle.modal}>
            <div className={EditModalWindowStyle.editWindow}>
                <i className="far fa-times-circle"></i>
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
