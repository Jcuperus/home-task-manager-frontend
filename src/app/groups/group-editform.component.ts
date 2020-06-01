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

    ngOnInit(){
        let id = this.route.snapshot.params.id;
        //this.service.getGroup(id).subscribe(currentGroup => this.currentGroup = currentGroup);
    }


}