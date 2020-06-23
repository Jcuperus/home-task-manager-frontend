import { Component, Input } from "@angular/core";
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent {
    @Input() tasks: Task[];

    constructor(private task: TaskService) {  }

    test(id){
        this.task.deleteTask(id);
    }
    
}