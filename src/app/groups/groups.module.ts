import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { GroupFormComponent } from './group-form.component';
import { GroupListComponent } from './group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupsService } from './groups.service';
import { GroupEditFormComponent } from './group-editform.component';

@NgModule({
    declarations: [ 
        GroupFormComponent, 
        GroupListComponent,
        GroupEditFormComponent 
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        GroupRoutingModule
    ],
    providers: [
        GroupsService
    ]
})
export class GroupsModule {}
