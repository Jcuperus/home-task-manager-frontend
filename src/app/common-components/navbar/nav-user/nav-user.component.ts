import { Component } from "@angular/core";
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/users/user';
import { MessageService } from '../../message-box/message.service';
import { createMessage } from '../../message-box/message';

@Component({
    selector: 'app-nav-user',
    templateUrl: './nav-user.component.html',
    styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent {
    currentUser: User = new User();

    constructor(private authenticationService: AuthenticationService, private messageService: MessageService) {
        authenticationService.getCurrentUser().subscribe(user => this.currentUser = user);
    }

    logout(){
        if(localStorage.getItem("Authorization")){
            localStorage.removeItem("Authorization");
            localStorage.removeItem("currentUser");
            this.currentUser = null;
            this.messageService.setMessage(createMessage('success', "You are logged out"));
        }
    }
} 