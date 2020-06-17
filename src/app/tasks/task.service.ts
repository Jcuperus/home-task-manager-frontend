import { Injectable } from '@angular/core';
import { Task } from './task';
import { of, Observable } from 'rxjs';

import { TASKS } from './mock-tasks';
import { Group } from '../groups/group';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

    taskUrl = "http://localhost:8080/tasks/";

    constructor(private http: HttpClient) { }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>(this.taskUrl + id, { responseType: 'json' });
    }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.taskUrl);
    }

    finishTasks() {
        
    }
        
    getGroupTasks(groups: Group[]): Observable<Task[]> {
        return of(TASKS.filter(task => groups.filter(group => group.id == task.groupId).length > 0));
    }

    saveTask(task: Task): Observable<any> {
        return of(task);
    }
}