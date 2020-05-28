import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.css'],
    template: `
        <nav>
            <a class="title" routerLink="/"><i class="fa fa-2x fa-rocket"></i><span>Home Task Manager</span></a>
            <a *ngFor="let link of links" [routerLink]="link.route">{{ link.title }}</a>
            <div class="spacer"></div>
            <a routerLink="/"><i class="fas fa-2x fa-user-circle"></i></a>
        </nav>
    `
})
export class NavbarComponent { 
    links = [
        { route: '/tasks', title: 'Tasks' },
        { route: '/reg', title: 'Regi' },
        { route: '/more-links', title: 'More Links' },
        { route: '/even-more-links', title: 'Even More Links' },
        { route: '/no-more-links', title: 'No More Links' }
    ]
}