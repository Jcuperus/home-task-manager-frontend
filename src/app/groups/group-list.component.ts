import { Component, OnInit } from "@angular/core";
import {Group} from './groups';
import { GroupsService } from './groups.service';

@Component({
    templateUrl: 'group-list.component.html',
    styleUrls: ['group-list.component.css'],
})

export class GroupListComponent implements OnInit{
    groups: Array<Group>;

    constructor(private service: GroupsService){}

    ngOnInit(){
            this.service.getGroups().subscribe(groups => this.groups = groups);
    }
}