import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { Message } from './message';

@Injectable()
export class MessageService {
    private messageSource = new Subject<Message>();
    
    getMessage(): Observable<Message> {
        return this.messageSource.asObservable();
    }

    setMessage(message: Message) {
        this.messageSource.next(message);
    }
}