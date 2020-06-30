import { Component, Input } from "@angular/core";
import { createMessage } from 'src/app/common-components/message-box/message';
import { MessageService } from 'src/app/common-components/message-box/message.service';
import { Task } from '../../task';
import { TaskService } from '../../task.service';
import { PushNotificationService } from 'src/app/common-components/push-notifications/push-notifications.service';

@Component({
    selector: 'app-task-list-item',
    templateUrl: './task-list-item.component.html',
    styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent {
    @Input() task: Task;

    constructor(private taskService: TaskService, private messageService: MessageService, private notificationService: PushNotificationService) {
        setInterval(() => {
            let now = new Date();
            let reminder = Date.parse(this.task.reminder as unknown as string);
            let reminderDate = new Date(reminder);
            if(now.valueOf() == reminderDate.valueOf()){
                this.giveNotification();
            }
        }, 1);
    }

    deleteTask() {
        this.taskService.deleteTask(this.task.id).subscribe(response => {
            this.messageService.setMessage(createMessage('success', response.message));
            this.taskService.emitTaskChange(this.task)
        });
    }

    giveNotification(){
        let data = [];
        data.push({'title': 'Reminder', 'alertContent': 'Task' + this.task.name + ' is due from ' + this.task.dueDate});
        this.notificationService.makeNotification(data);
    }

    finishTask() {
        console.log("TODO: finish task");
    }
}