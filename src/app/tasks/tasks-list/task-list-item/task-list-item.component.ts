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

    taskIDIsUserID: boolean = false;

    constructor(private taskService: TaskService, private messageService: MessageService, private authneticationService: AuthenticationService) {}

    ngOnInit(){
        this.authneticationService.getCurrentUser().subscribe(resp => {
            if(this.task.user && resp.id === this.task.user.id){
                this.taskIDIsUserID = true;
            }
         })
    }

    deleteTask() {
        this.taskService.deleteTask(this.task.id).subscribe(response => {
            this.messageService.setMessage(createMessage('success', response.message));
            this.taskService.emitTaskChange(this.task)
        });
    }

    finishTask() {
        this.taskService.finishTasks(this.task.id).subscribe(resp => {
            this.taskService.emitTaskChange(this.task)
        });
    }
}