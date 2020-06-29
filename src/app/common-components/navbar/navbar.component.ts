import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit{ 
    links = [
        { route: '/tasks', title: 'Tasks' }
    ];

    loggedIn = false;

    mobileNavOpen = false;

    constructor(private authenticationService: AuthenticationService) {  }

    ngOnInit(){
        this.authenticationService.getCurrentUser().subscribe(resp => {
            if(resp){
                this.loggedIn = true;
            }
        })
    }

    toggleMobileNav() {
        this.mobileNavOpen = !this.mobileNavOpen;
    }
}