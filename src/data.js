const ADD_TASK = 'ADD-TASK';
const UPDATE_NEW_TASK_TEXT = 'UPDATE-NEW-TASK-TEXT';

let store = {
    _Data: [
        {
            caption: 'To Do',
            inputValue: 'Enter What To Do',
            cardsItems: [
                {
                    name: 'CRA',
                    time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)'
                },
                {
                    name: 'Task 1',
                    time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)'
                },
                {
                    name: 'Task 2',
                    time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)'
                },
                {
                    name: 'Task 2',
                    time: 'Sun Nov 17 2019 21:07:51 GMT+0200 (Восточная Европа, стандартное время)'
                }
            ],
            newTaskText: ''
        },
        {
            caption: 'In Progress',
            inputValue: `Enter What's in Progress`,
            cardsItems: [],
            newTaskText: ''
        },
        {
            caption: 'Done',
            inputValue: `Enter What is Done`,
            cardsItems: [],
            newTaskText: ''
        }
    ],
    _renderTree() {
        console.log('state is changed');
    },
    getData() {
        return this._Data;
    },
    subscribe(observer) {
        this._renderTree = observer;
    },
    dispatch(action) {
        if (action.type === ADD_TASK) {
            const newTask = {
                name: action.column.newTaskText,
                time: new Date()
            };
            action.column.cardsItems.unshift(newTask);
            action.column.newTaskText = '';
            this._renderTree(this._Data);
        } else if (action.type === UPDATE_NEW_TASK_TEXT) {
            action.column.newTaskText = action.newText;
            this._renderTree(this._Data);
        }
    }
};

export const addTaskActionCreator = (column) =>
    ({type: ADD_TASK, column: column});

export const onTaskChangeActionCreator = (taskText, column) =>
    ({type: UPDATE_NEW_TASK_TEXT, newText: taskText, column: column});

export default store;
