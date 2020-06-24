import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GroupFormComponent } from './group-form.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupsService } from './groups.service';


@NgModule({
    declarations: [
        GroupFormComponent
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
