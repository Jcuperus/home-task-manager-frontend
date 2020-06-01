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
    task: Task;
    groups: Group[];
    
    constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService, private groupService: GroupsService) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.taskService.getTask(parseInt(params.get('id'))).subscribe((task: Task) => this.task = task);
            } else {
                this.task = { name: '', description: '', isDone: false };
            }
        });

        this.groupService.getGroups().subscribe(groups => this.groups = groups);
    }

    onSave() {
        this.taskService.saveTask(this.task).subscribe(() => this.router.navigate(['/tasks']));
    }
}