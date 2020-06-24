import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { TasksComponent } from './tasks.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { GroupFormComponent } from '../groups/group-form.component';

const tasksRoutes: Routes = [
    { path: 'create', component: TaskFormComponent, data: { title: 'Create task' } },
    { path: ':id', component: TaskFormComponent, data: { title: 'Edit task' } },
    { path: '', component: TasksComponent, data: { title: 'Task overview' } },
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