import { Task } from './task';

export const TASKS: Task[] = [
    { id: 1, groupId: 1, name: 'Feed cat', description: 'Give him the good stuff', due: new Date(), isDone: false },
    { id: 2, groupId: 1, name: 'Do the dishes', description: 'Please don\'t make me do it again', due: addDateDays(new Date(), 2), isDone: true },
    { id: 3, groupId: 2, name: 'Do some paperwork', description: 'Boy do I love me some paperwork', due: addDateDays(new Date(), 4), isDone: true }
];

function addDateDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
}
