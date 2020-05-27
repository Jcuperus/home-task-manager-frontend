import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GroupsService } from './groups.service';
import { Group } from './groups';

@Component({
    templateUrl: './group-form.component.html'
})
export class GroupFormComponent implements OnInit {
    group: Group;
    
    constructor(private route: ActivatedRoute, private groupservice: GroupsService) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.groupservice.getGroup(parseInt(params.get('id'))).subscribe((group: Group) => this.group = group);
            } else {
                this.group = { group: [], name: ''};
            }
        });
    }
}