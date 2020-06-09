import { Component, ContentChild } from "@angular/core";

@Component({
    selector: 'app-sidebar',
    template: '<ng-content></ng-content>',
    styleUrls: ['./sidebar.component.css']
})
export class Sidebar { }

@Component({
    selector: 'app-sidebar-content',
    template: '<ng-content></ng-content>',
    styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContent { }


@Component({
    selector: 'app-sidebar-layout',
    templateUrl: './sidebar-layout.component.html'
})
export class SidebarLayout { }