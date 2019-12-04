import {createStore} from "redux";
const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';
const SHOW_MODAL = 'SHOW-MODAL';
const HIDE_MODAL = 'HIDE-MODAL';
const CARD_EDIT = 'CARD-EDIT';

let initialState = {
    columns: [
        {
            caption: 'To Do',
            placeholder: 'WhatTo Do?',
        },
        {
            caption: 'In Progress',
            placeholder: 'What in Progress?'
        },
        {
            caption: 'Done',
            placeholder: 'What is Done?'

        }
    ],
    items: [
        {
            name: 'CRA',
            time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)',
            status: 'To Do'
        },
        {
            name: 'Task 1',
            time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)',
            status: 'To Do'
        },
        {
            name: 'Task 2',
            time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)',
            status: 'In Progress'
        },
        {
            name: 'Task 2',
            time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)',
            status: 'Done'
        }
    ],
    newTaskText: '',
    editItem: '',
    editColumn: '',
    modalStatus: false
};

const columnReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            const newTask = {
                name: state.newTaskText,
                time: new Date(),
                status: action.status
            };
            let stateCopy = {...state};
            stateCopy.items = [...state.items];
            stateCopy.items.unshift(newTask);
            stateCopy.newTaskText = '';
            return stateCopy;
        }
        case UPDATE_NEW_TASK_TEXT: {
            let stateCopy = {...state};
            stateCopy.newTaskText = action.newTaskText;
            return stateCopy;
        }
        case SHOW_MODAL: {
            let stateCopy = {...state};
            stateCopy.modalStatus = true;
            stateCopy.editItem = action.item;
            stateCopy.editColumn = action.column;
            return stateCopy;
        }
        case HIDE_MODAL: {
            let stateCopy = {...state};
            stateCopy.modalStatus = false;
            return stateCopy;
        }
        case CARD_EDIT: {
            let stateCopy = {...state};
            stateCopy.items.forEach(item => {
                if (item === stateCopy.editItem) {
                    item.name = action.newValue;
                    item.status = action.newStatus;
                    item.time = new Date();
                }
            });
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addTaskActionCreator = (status) =>
    ({type: ADD_TASK, status: status});

export const onTaskChangeActionCreator = (newTaskText) =>
    ({type: UPDATE_NEW_TASK_TEXT, newTaskText: newTaskText});

export const showModal = (item, column) =>
    ({type: SHOW_MODAL, item: item, column: column});

export const hideModal = () =>
    ({type: HIDE_MODAL});

export const cardEdit = (newStatus, newValue) =>
    ({type: CARD_EDIT, newStatus: newStatus, newValue: newValue});

let store = createStore(columnReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
