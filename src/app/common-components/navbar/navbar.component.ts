import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent { 
    links = [
        { route: '/tasks', title: 'Tasks' },
        { route: '/groups', title: 'Groups' },
        { route: '/auth/register', title: 'Register' },
        { route: '/more-links', title: 'More Links' },
        { route: '/even-more-links', title: 'Even More Links' }
    ];

    mobileNavOpen = false;

    toggleMobileNav() {
        this.mobileNavOpen = !this.mobileNavOpen;
    }
}