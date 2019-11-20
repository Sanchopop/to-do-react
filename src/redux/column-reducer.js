const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

let initialState = {
    columns: [
        {
            caption: 'To Do',
            placeholder: 'WhatTo Do?',
            newTaskText: ''
        },
        {
            caption: 'In Progress',
            placeholder: 'What in Progress?',
            newTaskText: ''
        },
        {
            caption: 'Done',
            placeholder: 'What is Done?',
            newTaskText: ''
        }
    ],
    items: [
        {
            name: 'CRA',
            time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)',
            status: 'toDo'
        },
        {
            name: 'Task 1',
            time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)',
            status: 'toDo'
        },
        {
            name: 'Task 2',
            time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)',
            status: 'inProgress'
        },
        {
            name: 'Task 2',
            time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)',
            status: 'done'
        }
    ]
};

const columnReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            const newTask = {
                name: action.newTaskText,
                time: new Date()
            };
            action.column.items.unshift(newTask);
            return state;
        case UPDATE_NEW_TASK_TEXT:
            state.newTaskText = action.newTaskText;
            return state;
        default:
            return state;
    }
};

export const addTaskActionCreator = (column) =>
    ({type: ADD_TASK, column: column});

export const onTaskChangeActionCreator = (newTaskText, column) =>
    ({type: UPDATE_NEW_TASK_TEXT, newTaskText: newTaskText, column: column});

export default columnReducer;
