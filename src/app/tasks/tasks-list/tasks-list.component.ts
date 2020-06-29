import { Component, Input } from "@angular/core";
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
    @Input() title: string = "Tasks";
    @Input() tasks: Task[];
}