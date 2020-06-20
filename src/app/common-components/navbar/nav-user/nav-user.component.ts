import { Component } from "@angular/core";
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { User } from 'src/app/groups/user';

@Component({
    selector: 'app-nav-user',
    templateUrl: './nav-user.component.html',
    styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent {
    currentUser: User;

    constructor(private authenticationService: AuthenticationService) {
        authenticationService.getCurrentUser().subscribe(user => this.currentUser = user);
    }
} 