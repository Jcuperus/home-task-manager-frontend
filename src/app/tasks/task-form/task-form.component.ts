import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { createMessage } from 'src/app/common-components/message-box/message';
import { MessageService } from 'src/app/common-components/message-box/message.service';
import { Group } from 'src/app/groups/group';
import { GroupsService } from 'src/app/groups/groups.service';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
    task: Task = { group: null, name: '', description: '', dueDate: new Date(), isDone: false };
    hours: Array<number> = [...Array(24).keys()];
    minutes: Array<number> = [...Array(60).keys()];
    reminderOptions: Array<string> = ['1 minute', '2 minutes', '3 minutes', '5 minutes', '10 minutes', '20 minutes', '30 minutes', '1 hour', '2 hours', 'No reminder'];
    groups: Group[];

    constructor(
        private route: ActivatedRoute,
        private taskService: TaskService, 
        private groupService: GroupsService,
        private messageService: MessageService) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.taskService.getTask(parseInt(params.get('id'))).subscribe((task: Task) => this.task = task);
            }
        });

        this.groupService.getGroups().subscribe(groups => this.groups = groups);
    }

    onSave() {
        this.taskService.saveTask(this.task).subscribe(response => {
            this.messageService.setMessage(createMessage('success', response.message))
        });
    }

    compareGroups(group1: Group, group2: Group): boolean {
        return group1 && group2 && group1.id == group2.id;
    }
}