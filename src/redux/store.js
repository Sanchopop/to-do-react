import columnReducer from "./column-reducer";

let store = {
    _state: {
        columns: [
            {
                caption: 'To Do',
                placeholder: 'WhatTo Do?',
                newTaskText: '',
                items: [
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
                ]
            },
            {
                caption: 'In Progress',
                placeholder: 'What in Progress?',
                newTaskText: '',
                items: []
            },
            {
                caption: 'Done',
                placeholder: 'What is Done?',
                newTaskText: '',
                items: []
            }
        ]
    },
    _renderTree() {
        console.log('state is changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderTree = observer;
    },
    dispatch(action) {
        columnReducer(this._state.columns, action);
    }
};

export default store;
