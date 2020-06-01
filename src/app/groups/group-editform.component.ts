import { Component, OnInit } from "@angular/core";
import { GroupsService } from './groups.service';
import { currentUser, groups } from './mock-groups';
import { User} from './user';
import {Group} from './groups';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'group-editform.component.html',
    styleUrls: ['group-list.component.css']
})
export class GroupEditFormComponent implements OnInit{
    currentUser: User;
    currentGroup: Group;

    constructor(private route: ActivatedRoute, private service: GroupsService){
        this.currentGroup = groups[this.route.snapshot.params.id];
    }

    removeMember(user: User){
        let index = this.currentGroup.group.indexOf(user);
        this.currentGroup.group.splice(index, 1);
    }

    makeManager(member: User){
        this.currentGroup.managers.push(member);
    }

    addMember(){
        // backend
    }

    ngOnInit(){
        
    }


}