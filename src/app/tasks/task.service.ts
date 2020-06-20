import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../groups/group';
import { Task } from './task';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient) { }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>('tasks/' + id);
    }

    getTasks(groups?: Group[]): Observable<Task[]> {
        const options = {};
        
        if (groups && groups.length > 0) {
            options['params'] = {
                group: groups.map(group => group.id)
            };
        }
        
        return this.http.get<Task[]>('tasks/', options);
    }

    finishTasks() {
        
    }

    saveTask(task: Task): Observable<any> {
        if (task.id) {
            return this.http.put('tasks/', task);
        }

        return this.http.post('tasks/', task, {responseType: 'text'});
    }
}