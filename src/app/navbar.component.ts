import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.css'],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent { 
    links = [
        { route: '/tasks', title: 'Tasks' },
        { route: '/link', title: 'Link' },
        { route: '/more-links', title: 'More Links' },
        { route: '/even-more-links', title: 'Even More Links' },
        { route: '/no-more-links', title: 'No More Links' }
    ];

    mobileNavOpen = false;

    toggleMobileNav() {
        this.mobileNavOpen = !this.mobileNavOpen;
        console.log(this.mobileNavOpen);
    }
}