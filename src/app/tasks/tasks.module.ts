import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CalendarModule } from 'primeng/calendar';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { GroupsModule } from '../groups/groups.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksComponent } from './tasks.component';
import { TaskService } from './task.service';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksCalendar } from './tasks-calendar/tasks-calendar.component';
import { TaskListItemComponent } from './tasks-list/task-list-item/task-list-item.component';
import { PushNotificationService } from '../common-components/push-notifications/push-notifications.service';


@NgModule({
    declarations: [
        TasksComponent,
        TasksListComponent,
        TaskListItemComponent,
        TaskFormComponent,
        TasksCalendar
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
        TaskService,
        PushNotificationService
    ]
})
export class TasksModule {  }