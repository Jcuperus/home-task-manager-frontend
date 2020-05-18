import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TaskListComponent } from './task-list.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskService } from './task.service';
import { TaskFormComponent } from './task-form.component';

@NgModule({
    declarations: [
        TaskListComponent,
        TaskFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TasksRoutingModule
    ],
    providers: [
        TaskService
    ]
})
export class TasksModule {  }