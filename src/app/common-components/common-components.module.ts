import { NgModule } from "@angular/core";
import { CheckboxGroupComponent } from './checkbox-group.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageTitleComponent } from './page-title.component';
import { Sidebar, SidebarContent, SidebarLayout } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        CheckboxGroupComponent,
        PageTitleComponent,
        Sidebar,
        SidebarContent,
        SidebarLayout
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CheckboxGroupComponent,
        PageTitleComponent,
        Sidebar,
        SidebarContent,
        SidebarLayout
    ]
})
export class CommonComponentsModule {
    
}