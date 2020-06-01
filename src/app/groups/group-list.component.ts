import { Component, OnInit } from "@angular/core";
import {Group} from './groups';
import { GroupsService } from './groups.service';
import { currentUser } from './mock-groups';
import { User} from './user';
@Component({
    templateUrl: 'group-list.component.html',
    styleUrls: ['group-list.component.css'],
})

export class GroupListComponent implements OnInit{
    groups: Array<Group>;
    currentUser: User;

    constructor(private service: GroupsService){}

    ngOnInit(){
            this.service.getGroups().subscribe(groups => this.groups = groups);
    }

    isManager(group: Group): boolean{
        for(let manager of group.managers){
            if(currentUser == manager){
                return true;
            }
        }
        return false;
    }
}