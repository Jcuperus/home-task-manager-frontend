import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { User } from '../../users/user';
import { Group } from '../group';
import { GroupsService } from '../groups.service';
import { MessageService } from 'src/app/common-components/message-box/message.service';
import { createMessage } from 'src/app/common-components/message-box/message';

@Component({
    templateUrl: './group-form.component.html',
    styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
    group: Group = {id: 0, name: '', users: []};
    memberAddForm: FormGroup;
    newMember: string;
    currentUser: User;

    constructor(private groupservice: GroupsService, private messageService: MessageService, private route: ActivatedRoute, private router: Router) {}
    
    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            if (params.has('id')) {
                this.groupservice.getGroup(parseInt(params.get('id'))).subscribe((group: Group) => {
                    this.group = group;
                });
            }
        });
        this.setCurrentUser();
    }

    setCurrentUser(){
        this.groupservice.getCurrentUser().subscribe(user => this.currentUser = user);
    }

    addMember(){
        this.groupservice.getUserByName(this.newMember).subscribe(
            user => {
                if(user.username != this.currentUser.username){
                    this.group.users.push(user);
                }
            },
            error => this.messageService.setMessage(createMessage("error", "Could not find user"))
        );
    }

    removeMember(index: number){
        this.group.users.splice(index, 1);
    }

    onSave(){
        this.groupservice.saveGroup(this.group).subscribe(response => console.log(response));
        this.router.navigate(['/tasks']);
    }
}