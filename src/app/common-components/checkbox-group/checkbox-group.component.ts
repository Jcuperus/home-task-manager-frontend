import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Group } from 'src/app/groups/group';
import { GroupsService } from 'src/app/groups/groups.service';
import { User } from 'src/app/users/user';
import { CheckboxItem } from './checkbox-item';

@Component({
    selector: 'app-checkbox-group',
    templateUrl: './checkbox-group.component.html',
    styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent {
    @Input() checkboxItems: CheckboxItem[];
    @Output() onSelectionChange = new EventEmitter<CheckboxItem[]>();
    currentUser: User;
    currentGroup: Group;

    constructor(private groupsService: GroupsService){}

    ngOnInit(){
        this.groupsService.getCurrentUser().subscribe(user => this.currentUser = user);
    }

    onSelect(selectedCheckboxItem: CheckboxItem) {
        this.onSelectionChange.emit(this.checkboxItems.filter(checkboxItem => checkboxItem.checked));
    }

    leaveGroup(user: User, groupid: number){
        this.groupsService.getGroup(groupid).subscribe(group => {
            console.log("group assigned successfully");
            this.currentGroup = group;
            this.groupsService.removeUser(user, this.currentGroup).subscribe(response => console.log(response));
        });
    }

}