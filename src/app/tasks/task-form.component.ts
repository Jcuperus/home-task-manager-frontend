import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
    task: Task;
    hours: Array<number>;
    minutes: Array<number>;
    reminderOptions: Array<string>;
    
    constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) {
        this.hours = Array(24).fill(0).map((x,i) => i);
        this.minutes = Array(60).fill(0).map((x,i) => i);
        this.reminderOptions = ['1 minute', '2 minutes', '3 minutes', '5 minutes', '10 minutes', '20 minutes', '30 minutes', '1 hour', '2 hours', 'No reminder'];
     }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.taskService.getTask(parseInt(params.get('id'))).subscribe((task: Task) => this.task = task);
            } else {
                this.task = { name: '', description: '', isDone: false , complete(){}};
            }
        });
    }
}