import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './task-list.component';
import { TaskFormComponent } from './task-form.component';

const tasksRoutes: Routes = [
    { path: 'create', component: TaskFormComponent, data: { title: 'Create task' } },
    { path: ':id', component: TaskFormComponent, data: { title: 'Edit task' } },
    { path: '', component: TaskListComponent, data: { title: 'Task overview' } }
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