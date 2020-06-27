import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GroupFormComponent } from './group-form/group-form.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupsService } from './groups.service';
import { GroupsListComponent } from './groups-list/groups-list.component';


@NgModule({
    declarations: [
        GroupFormComponent,
        GroupsListComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        GroupRoutingModule
    ],
    exports: [
        GroupsListComponent
    ],
    providers: [
        GroupsService
    ]
})
export class GroupsModule {}
