import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { Message } from './message';

@Injectable()
export class MessageService {
    currentMessage: Message;
    
    private messageSource = new Subject<Message>();
    messageChanged$ = this.messageSource.asObservable(); 
    
    getMessage(): Message {
        return this.currentMessage;
    }

    setMessage(message: Message) {
        this.currentMessage = message;
        this.messageSource.next(message);
    }
}