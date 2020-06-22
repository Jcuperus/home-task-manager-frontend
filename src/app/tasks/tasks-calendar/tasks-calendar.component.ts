import { Component, Input, OnInit, OnChanges } from "@angular/core";
import { Task } from '../task';

@Component({
    selector: 'app-tasks-calendar',
    templateUrl: './tasks-calendar.component.html',
    styleUrls: ['./tasks-calendar.component.css']
})
export class TasksCalendar implements OnChanges {
    @Input() tasks: Task[] = [];
    groupedTasks: Task[][];

    ngOnChanges() {
        if (this.tasks && this.tasks.length > 0) {
            this.groupedTasks = [];
            
            for (let task of this.tasks) {
                let dateString = this.getDateWithoutTime(task.dueDate).toISOString();
                if (!this.groupedTasks[dateString]) {
                    this.groupedTasks[dateString] = [];
                }

                this.groupedTasks[dateString].push(task);
            }
        }
    }

    private getDateWithoutTime(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
}