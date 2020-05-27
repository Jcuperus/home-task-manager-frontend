import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { GroupFormComponent } from './group-form.component';
import { GroupListComponent } from './group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupsService } from './groups.service';

@NgModule({
    declarations: [ 
        GroupFormComponent, 
        GroupListComponent 
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        GroupRoutingModule
    ],
    providers: [
        GroupsService
    ]
})
export class GroupsModule {}