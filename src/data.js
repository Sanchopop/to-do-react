import {renderTree} from "./render";

const Data = [
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
];

export let addTask = (column) => {

    const newTask = {
        name: column.newTaskText,
        time: new Date()
    };

    column.cardsItems.unshift(newTask);
    column.newTaskText = '';
    renderTree(Data);
};

export const updateNewTaskText = (newText, column) => {
    column.newTaskText = newText;
    renderTree(Data);
};

export default Data;
