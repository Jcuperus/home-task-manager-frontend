import { NgModule } from "@angular/core";
import { GroupsService } from './groups.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [GroupsService]
})
export class GroupsModule {
    
}