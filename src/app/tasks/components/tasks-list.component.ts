import { Component, Input } from "@angular/core";
import { Task } from '../task';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
    @Input() tasks: Task[];
}