import { Component, OnInit } from "@angular/core";
import { MessageService } from './message.service';
import { Message } from './message';

@Component({
    selector: 'app-message-box',
    templateUrl: './message-box.component.html',
    styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit{
    message: Message;

    constructor(private messageService: MessageService) {   }

    ngOnInit(){
        this.messageService.messageChanged$.subscribe(message => {console.log(message, "test"); this.message = message; });
    }
}