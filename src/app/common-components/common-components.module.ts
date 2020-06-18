import { NgModule } from "@angular/core";
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from './page-title.component';
import { Sidebar, SidebarContent, SidebarLayout } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageService } from './message-box/message.service';

@NgModule({
    declarations: [
        CheckboxGroupComponent,
        NavbarComponent,
        PageTitleComponent,
        MessageBoxComponent,
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
        MessageBoxComponent,
        Sidebar,
        SidebarContent,
        SidebarLayout
    ],
    providers: [
        MessageService
    ]
})
export class CommonComponentsModule {
    
}