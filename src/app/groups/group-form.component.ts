import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Group } from './group';
import { GroupsService } from './groups.service';

@Component({
    templateUrl: './group-form.component.html'
})
export class GroupFormComponent implements OnInit {
    group: Group;
    memberAddForm: FormGroup;
    newMember: string;
    constructor(private route: ActivatedRoute, private groupservice: GroupsService) { }
    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.groupservice.getGroup(parseInt(params.get('id'))).subscribe((group: Group) => this.group = group);
            } else {
                this.group = {id: 0, name: '', users: []};
            }
        });
    }

    addMember(){
        this.groupservice.getUserByName(this.newMember).subscribe(user => this.group.users.push(user));
    }

    removeMember(index: number){
        this.group.users.splice(index, 1);
    }

    onSave(){
        this.groupservice.saveGroup(this.group).subscribe(response => console.log(response));
    }
}