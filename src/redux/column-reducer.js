const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

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
    newTaskText: ''
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
        default:
            return state;
    }
};

export const addTaskActionCreator = (status) =>
    ({type: ADD_TASK, status: status});

export const onTaskChangeActionCreator = (newTaskText) =>
    ({type: UPDATE_NEW_TASK_TEXT, newTaskText: newTaskText});

export default columnReducer;
