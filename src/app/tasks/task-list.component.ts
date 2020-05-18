import { Component, OnInit } from "@angular/core";
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    tasks: Array<Task>;

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }
}