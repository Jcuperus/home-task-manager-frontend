import { Injectable } from '@angular/core';
import { Group } from './groups';
import { of, Observable } from 'rxjs';
import { groups} from './mock-groups';
import { User } from './user';

@Injectable()
export class GroupsService{
    getGroup(id: number): Observable<Group>{
        return of(groups[id]);
    }
    getMemberOfGroup(group: number, id: number): Observable<Group>{
        return of(groups[group][id]);
    }
    getGroups(): Observable<Group[]>{
        return of(groups);
    }
    addGroup(group: Group){
        groups.push(group);
    }
    addMemberToGroup(group: Group, member: User){
        groups[groups.indexOf(group)].group.push(member);
    }
    joinGroupMembers(id: number){
        let currentGroup = groups[id].group;
        let members = currentGroup.join();
        return members;
    }
}