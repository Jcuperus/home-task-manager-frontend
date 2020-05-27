import { Injectable } from "@angular/core";
import { Group } from './group';
import { of, Observable } from 'rxjs';
import { GROUPS } from './mock-groups';

@Injectable()
export class GroupsService {
    getGroups(): Observable<Group[]> {
        return of(GROUPS);
    }
}