import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { TasksComponent } from './components/tasks.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskService } from './task.service';
import { TaskFormComponent } from './components/task-form.component';
import { GroupsModule } from '../groups/groups.module';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
    declarations: [
        TasksComponent,
        TaskFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TasksRoutingModule,
        GroupsModule,
        CommonComponentsModule
    ],
    providers: [
        TaskService
    ]
})
export class TasksModule {  }