import { Component, Input, OnInit } from "@angular/core";
import { createMessage } from 'src/app/common-components/message-box/message';
import { MessageService } from 'src/app/common-components/message-box/message.service';
import { Task } from '../../task';
import { TaskService } from '../../task.service';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
    selector: 'app-task-list-item',
    templateUrl: './task-list-item.component.html',
    styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit{
    @Input() task: Task;

    color: String;
    belongsToUser = false;

    constructor(private taskService: TaskService, private messageService: MessageService, private authenticationService: AuthenticationService) {}

    ngOnInit(){
        this.authenticationService.getCurrentUser().subscribe(response => {
            if (this.task.user && response.id === this.task.user.id) {
                this.belongsToUser = true;
            }
        });
    }

    deleteTask() {
        this.taskService.deleteTask(this.task.id).subscribe(response => {
            this.messageService.setMessage(createMessage('success', response.message));
            this.taskService.emitTaskChange(this.task)
        });
    }

    finishTask() {
        this.taskService.finishTasks(this.task.id).subscribe(response => {
            this.taskService.emitTaskChange(this.task)
        });
    }

    getColor(): String {
        if (!this.color) {
            var color = this.task.group.color.substring(1);
            var rgb = parseInt(color, 16);
            var r = (rgb >> 16) & 0xff;
            var g = (rgb >> 8)  & 0xff;
            var b = (rgb >> 0)  & 0xff;
    
            var luma =  0.216 * r + 0.7152 * g + 0.0722 * b;
    
            if (luma < 128) {
                this.color = "#ffffff";
            } else {
                this.color = "#000000";
            }
        }

        return this.color;
    }
}