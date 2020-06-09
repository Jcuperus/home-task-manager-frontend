import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GroupsService } from './groups.service';
import { Group } from './groups';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { User } from './user';

@Component({
    templateUrl: './group-form.component.html'
})
export class GroupFormComponent implements OnInit {
    group: Group;
    memberAddForm: FormGroup;
    constructor(private route: ActivatedRoute, private groupservice: GroupsService, private fb: FormBuilder) { }
    ngOnInit() {
        this.memberAddForm = this.fb.group({
            name: this.fb.control(''),
            formRow: this.fb.group({
                members: this.fb.array([
                    this.fb.control('')
                ])
            })
        });
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.groupservice.getGroup(parseInt(params.get('id'))).subscribe((group: Group) => this.group = group);
            } else {
                this.group = {id: 0, managers: [new User('default','default')], group: [], name: ''};
            }
        });
    }

    get members(){
        return this.memberAddForm.get('formRow').get('members') as FormArray;
    }

    addMember(){
        this.members.push(this.fb.control(''));
    }

    removeMember(){
        this.members.removeAt(this.members.length-1);
    }

    onSave(){
            // stuur signaal naar backend als die er is
    }
}