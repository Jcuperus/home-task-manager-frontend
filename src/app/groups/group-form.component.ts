import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../users/user';
import { Group } from './group';
import { GroupsService } from './groups.service';
import { MessageService } from '../common-components/message-box/message.service';
import { createMessage } from '../common-components/message-box/message';

@Component({
    templateUrl: './group-form.component.html'
})
export class GroupFormComponent implements OnInit {
    group: Group;
    memberAddForm: FormGroup;
    newMember: string;
    currentUser: User;
    constructor(private route: ActivatedRoute, private groupservice: GroupsService, private router: Router, private messageService: MessageService) {}
    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.groupservice.getGroup(parseInt(params.get('id'))).subscribe((group: Group) => this.group = group);
            } else {
                this.group = {id: 0, name: '', users: []};
            }
        });
        this.setCurrentUser();
    }

    setCurrentUser(){
        this.groupservice.getCurrentUser().subscribe(user => this.currentUser = user);
    }

    addMember(){
        this.groupservice.getUserByName(this.newMember).subscribe(user => {
            if(user.username != this.currentUser.username){
                this.group.users.push(user);
            }
        });
    }

    removeMember(index: number){
        this.group.users.splice(index, 1);
    }

    onSave(){
        this.groupservice.saveGroup(this.group).subscribe(response => console.log(response));
        this.router.navigate(['/tasks']);
    }
}