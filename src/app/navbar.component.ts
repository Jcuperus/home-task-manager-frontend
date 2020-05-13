import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent { 
    links = [
        { url: '/', title: 'Link' },
        { url: '/', title: 'More Links' },
        { url: '/', title: 'Even More Links' },
        { url: '/', title: 'No More Links' }
    ]
}