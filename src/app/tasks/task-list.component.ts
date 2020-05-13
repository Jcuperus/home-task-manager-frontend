import { Component } from "@angular/core";

@Component({
    template: `
        <div *ngFor="let task of tasks" class="task">
            <span *ngIf="task.isDone; else notDone"><i class="fas fa-check"></i></span>
            <ng-template #notDone><i class="fas fa-times"></i></ng-template>
            <h4>{{ task.name }}</h4>
            <p>{{ task.description }}</p>
        </div>
    `
})
export class TaskListComponent {
    tasks = [
        { name: 'Feed cat', description: 'Give him the good stuff', isDone: false },
        { name: 'Do the dishes', description: 'Please don\'t make me do it again', isDone: true }
    ]
}