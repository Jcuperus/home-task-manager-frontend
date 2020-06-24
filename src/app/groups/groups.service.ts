import { Injectable } from '@angular/core';
import { Group } from './group';
import { of, Observable } from 'rxjs';
import { User } from '../users/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class GroupsService {

    constructor(private http: HttpClient) {}

    getGroup(id: number): Observable<Group>{
        return this.http.get<Group>('groups/' + id).pipe(map(group => group));
    }

    getGroups(): Observable<Group[]>{
        return this.http.get<Group[]>("groups");
    }
    getUserFromDb(value: string): Observable<User>{
        return this.http.get<User>('/users/'+value);
    }

    addGroup(group: Array<string>) : Observable<Group> {
        return this.http.put<Group>('groups', group);
    }

    saveGroup(group: Group): Observable<any>{
        return this.http.post('groups', group);
    }

    getCurrentUser(): Observable<User>{
        return this.http.get<User>('users/current');
    }

    getUserByName(username: string): Observable<User>{
        return this.http.get<User>('users/name/' + username);
    }
}