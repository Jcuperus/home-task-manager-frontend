import { Injectable } from '@angular/core';
import { Task } from './task';
import { of, Observable } from 'rxjs';

import { TASKS } from './mock-tasks';
import { Group } from '../groups/group';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class TaskService {

    taskUrl = "http://localhost:8080/tasks/";

    constructor(private http: HttpClient) { }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>(this.taskUrl + id);
    }

    getTasks(groups?: Group[]): Observable<Task[]> {
        const options = {};
        
        if (groups && groups.length > 0) {
            options['params'] = {
                group: groups.map(group => group.id)
            };
        }
        
        return this.http.get<Task[]>(this.taskUrl, options);
    }

    finishTasks() {
        
    }

    saveTask(task: Task): Observable<any> {
        if (task.id) {
            return this.http.put(this.taskUrl, task);
        }

        return this.http.post(this.taskUrl, task, {responseType: 'text'});
    }
}