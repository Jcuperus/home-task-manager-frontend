import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from 'primeng/calendar';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { GroupsModule } from '../groups/groups.module';
import { TaskFormComponent } from './components/task-form.component';
import { TasksListComponent } from './components/tasks-list.component';
import { TasksComponent } from './components/tasks.component';
import { TaskService } from './task.service';
import { TasksRoutingModule } from './tasks-routing.module';


@NgModule({
    declarations: [
        TasksComponent,
        TasksListComponent,
        TaskFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CalendarModule,
        TasksRoutingModule,
        GroupsModule,
        CommonComponentsModule
    ],
    providers: [
        TaskService
    ]
})
export class TasksModule {  }