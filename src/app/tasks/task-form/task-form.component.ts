import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { createMessage } from 'src/app/common-components/message-box/message';
import { MessageService } from 'src/app/common-components/message-box/message.service';
import { Group } from 'src/app/groups/group';
import { GroupsService } from 'src/app/groups/groups.service';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
    templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
    task: Task = { group: null, name: '', description: '', dueDate: new Date(), reminder: new Date(), isDone: false };
    reminderOptions: ReminderOptions[] = [{ value: 1, name: '1 minute'},
    { value: 2, name: '2 minutes'},
    { value: 3, name: '3 minutes'},
    { value: 5, name: '5 minutes'},
    { value: 10, name: '10 minutes'},
    { value: 20, name: '20 minutes'},
    { value: 30, name: '30 minutes'},
    { value: 60, name: '1 hour'},
    { value: 120, name: '2 hours'}];
    groups: Group[];
    selectedOption: number;
    public selectedValue: string;
    remindTime: Date;

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
            this.messageService.setMessage(createMessage('success', response.message));
        });
    }

    setRemindTime(minutes: number){
        let MS_PER_MINUTE = 60000;
        this.task.reminder = new Date(this.task.dueDate.valueOf() - minutes * MS_PER_MINUTE);
        console.log(this.task.reminder);
    }

    compareGroups(group1: Group, group2: Group): boolean {
        return group1 && group2 && group1.id == group2.id;
    }
}

export interface ReminderOptions{
    value?: number;
    name?: string;
}