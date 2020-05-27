import { Task } from './task';

export const TASKS: Task[] = [
    { id: 1, name: 'Feed cat', description: 'Give him the good stuff', isDone: false, complete(){
        if(!this.isDone){
            this.isDone = true;
        }
    }},
    { id: 1, name: 'Do the dishes', description: 'Please don\'t make me do it again', isDone: true, complete(){
        if(!this.isDone){
            this.isDone = true;
        }
    } }
];