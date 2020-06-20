import { Component } from "@angular/core";
import { AuthenticationService } from './authentication.service';
import { Credentials } from './credentials';
import { MessageService } from '../common-components/message-box/message.service';
import { createMessage } from '../common-components/message-box/message';


@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {  

    credentials: Credentials = { username: null, password: null };

    constructor(private authenticationService: AuthenticationService, private messageService: MessageService) {}

    login() {
        this.authenticationService.login(this.credentials).subscribe(
            response => this.messageService.setMessage(createMessage('success', response.message)),
            error => this.messageService.setMessage(createMessage('error', error))
        );
    }
}