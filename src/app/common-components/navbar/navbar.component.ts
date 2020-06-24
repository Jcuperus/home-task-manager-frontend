import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent { 
    links = [
        { route: '/tasks', title: 'Tasks' }
    ];

    mobileNavOpen = false;

    toggleMobileNav() {
        this.mobileNavOpen = !this.mobileNavOpen;
    }
}