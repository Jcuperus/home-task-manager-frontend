import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
    task: Task;
    
    constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.taskService.getTask(parseInt(params.get('id'))).subscribe((task: Task) => this.task = task);
            } else {
                this.task = { name: '', description: '', isDone: false };
            }
        });
    }
}