import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { GroupsService } from 'src/app/groups/groups.service';
import { Group } from 'src/app/groups/group';

@Component({
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
    task: Task = { name: '', description: '', dueDate: new Date(), isDone: false };
    hours: Array<number> = Array(24).fill(0).map((x,i) => i);
    minutes: Array<number> = Array(60).fill(0).map((x,i) => i);
    reminderOptions: Array<string> = ['1 minute', '2 minutes', '3 minutes', '5 minutes', '10 minutes', '20 minutes', '30 minutes', '1 hour', '2 hours', 'No reminder'];
    groups: Group[];

    constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService, private groupService: GroupsService) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.taskService.getTask(parseInt(params.get('id'))).subscribe((task: Task) => this.task = task);
            }
        });

        this.groupService.getGroups().subscribe(groups => this.groups = groups);
    }

    onSave() {
        console.log('save', this.task);
        this.taskService.saveTask(this.task).subscribe(response => console.log(response));
    }

    onComplete() {
        
    }
}