import { Task } from './task';

export const TASKS: Task[] = [
    { id: 1, groupId: 1, name: 'Feed cat', description: 'Give him the good stuff', isDone: false },
    { id: 2, groupId: 1, name: 'Do the dishes', description: 'Please don\'t make me do it again', isDone: true },
    { id: 3, groupId: 2, name: 'Do some paperwork', description: 'Boy do I love me some paperwork', isDone: true }
];