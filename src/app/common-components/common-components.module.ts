import { NgModule } from "@angular/core";
import { CheckboxGroupComponent } from './checkbox-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from './page-title.component';
import { Sidebar, SidebarContent, SidebarLayout } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CheckboxGroupComponent,
        NavbarComponent,
        PageTitleComponent,
        Sidebar,
        SidebarContent,
        SidebarLayout
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        CheckboxGroupComponent,
        NavbarComponent,
        PageTitleComponent,
        Sidebar,
        SidebarContent,
        SidebarLayout
    ]
})
export class CommonComponentsModule {
    
}