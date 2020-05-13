import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    styleUrls: ['./navbar.component.css'],
    template: `
        <nav>
            <a class="title" routerLink="/"><i class="fa fa-2x fa-rocket"></i><span>Home Task Manager</span></a>
            <a *ngFor="let link of links" [routerLink]="link.route">{{ link.title }}</a>
        </nav>
    `
})
export class NavbarComponent { 
    links = [
        { route: '/tasks', title: 'Tasks' },
        { route: '/', title: 'Link' },
        { route: '/', title: 'More Links' },
        { route: '/', title: 'Even More Links' },
        { route: '/', title: 'No More Links' }
    ]
}