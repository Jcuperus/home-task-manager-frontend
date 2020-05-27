import { Component, OnInit } from "@angular/core";
import { Task } from '../task';
import { TaskService } from '../task.service';
import { GroupsService } from 'src/app/groups/groups.service';
import { GroupCheckboxItemAdapter, Group } from 'src/app/groups/group';

@Component({
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    groups: GroupCheckboxItemAdapter[];
    tasks: Task[];

    constructor(private taskService: TaskService, private groupsService: GroupsService) { }

    ngOnInit() {
        this.groupsService.getGroups().subscribe(groups => {
            this.groups = groups.map(group => new GroupCheckboxItemAdapter(group));
            console.log(this.groups);
        });

        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }

    onGroupsChange(selectedGroups: Group[]) {
        console.log(selectedGroups);
    }
}