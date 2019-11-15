import {renderTree} from "./render";

const Data = [
    {
        caption: 'To Do',
        inputValue: 'Enter What To Do',
        cardsItems: [
            {
                name: 'CRA',
                time: 'Today'
            },
            {
                name: 'Task 1',
                time: 'Today'
            },
            {
                name: 'Task 2',
                time: 'Today'
            },
            {
                name: 'Task 2',
                time: 'Today'
            }
        ]
    },
    {
        caption: 'In Progress',
        inputValue: `Enter What's in Progress`,
        cardsItems: []
    },
    {
        caption: 'Done',
        inputValue: `Enter What is Done`,
        cardsItems: []
    }
];

export let addTask = (taskText, time, column) => {

    const newTask = {
        name: taskText,
        time: time
    };

    column.cardsItems.unshift(newTask);
    renderTree(Data);
};

export default Data;
