import { Component } from "@angular/core";
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
    message: Message;

    constructor(private messageService: MessageService) {
        messageService.messageChanged$.subscribe(message => this.message = message);
    }
}