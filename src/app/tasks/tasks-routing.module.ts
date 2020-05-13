import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './task-list.component';

const tasksRoutes: Routes = [
    { path: 'tasks', component: TaskListComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(tasksRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule { }