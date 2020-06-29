import { Component } from "@angular/core";
import { GroupsService } from './groups.service';
import { User } from '../users/user';
import { Group } from './group';

@Component({
    selector: 'app-group-leave-button',
    template: '<a (click)="leaveGroup(currentUser)"><i class="fas fa-trash-alt"></i></a>'
})
export class GroupLeaveButtonComponent{
    constructor(private groupservice: GroupsService){}
    currentUser: User;
    currentGroup: Group;

    ngOnInit(){
        this.groupservice.getCurrentUser().subscribe(user => this.currentUser = user);
    }

    leaveGroup(user: User){
        this.groupservice.removeUser(user, this.currentGroup).subscribe(response => console.log(response));
    }
}