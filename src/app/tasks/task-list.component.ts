import { Component } from "@angular/core";

@Component({
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    tasks = [
        { name: 'Feed cat', description: 'Give him the good stuff', isDone: false },
        { name: 'Do the dishes', description: 'Please don\'t make me do it again', isDone: true }
    ];
}