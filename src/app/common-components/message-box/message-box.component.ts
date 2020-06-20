import { Component } from "@angular/core";
import { Message } from './message';
import { MessageService } from './message.service';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
    message: Message;

    constructor(private messageService: MessageService) {
        this.messageService.getMessage().subscribe(message => {
            console.log(message);
            this.message = message;
        });
    }
}