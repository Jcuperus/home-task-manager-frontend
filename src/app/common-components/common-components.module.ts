import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { MessageService } from './message-box/message.service';
import { NavUserComponent } from './navbar/nav-user/nav-user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageTitleComponent } from './page-title.component';
import { Sidebar, SidebarContent, SidebarLayout } from './sidebar/sidebar.component';
import { ReadableBackgroundDirective } from './readable-background.directive';

@NgModule({
    declarations: [
        CheckboxGroupComponent,
        NavbarComponent,
        NavUserComponent,
        PageTitleComponent,
        MessageBoxComponent,
        Sidebar,
        SidebarContent,
        SidebarLayout,
        ReadableBackgroundDirective
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
        SidebarLayout,
        ReadableBackgroundDirective
    ],
    providers: [
        MessageService
    ]
})
export class CommonComponentsModule {
    
}