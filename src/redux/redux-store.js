import {createStore} from "redux";
const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';
const SHOW_MODAL = 'SHOW-MODAL';
const HIDE_MODAL = 'HIDE-MODAL';

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
            return stateCopy;
        }
        case HIDE_MODAL: {
            console.log('asdasd');
            return state;
        }
        default:
            return state;
    }
};

export const addTaskActionCreator = (status) =>
    ({type: ADD_TASK, status: status});

export const onTaskChangeActionCreator = (newTaskText) =>
    ({type: UPDATE_NEW_TASK_TEXT, newTaskText: newTaskText});

export const showModal = () =>
    ({type: SHOW_MODAL});

export const hideModal = () =>
    ({type: HIDE_MODAL});

let store = createStore(columnReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
