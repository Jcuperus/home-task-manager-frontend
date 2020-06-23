import { Component } from "@angular/core";
import { AuthenticationService } from './authentication.service';
import { Credentials } from './credentials';
import { MessageService } from '../common-components/message-box/message.service';
import { createMessage } from '../common-components/message-box/message';
import { Router } from '@angular/router';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {

    
    
    credentials: Credentials = { username: null, password: null };

    constructor(private authenticationService: AuthenticationService, private messageService: MessageService, private router: Router) { }

    public register() {
        this.authenticationService.register(this.credentials)
            .subscribe(response => this.messageService.setMessage(createMessage('success', response.message)));
        this.router.navigate(['auth/login']);
    }
}