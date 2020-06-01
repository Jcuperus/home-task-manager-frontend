import { Injectable } from '@angular/core';
import { Task } from './task';
import { of, Observable } from 'rxjs';

import { TASKS } from './mock-tasks';
import { Group } from '../groups/group';

@Injectable()
export class TaskService {
    getTask(id: number): Observable<Task> {
        return of(TASKS.filter(task => task.id == id)[0]);
    }

    getTasks(): Observable<Task[]> {
        return of(TASKS);
    }

    getGroupTasks(groups: Group[]): Observable<Task[]> {
        return of(TASKS.filter(task => groups.filter(group => group.id == task.groupId).length > 0));
    }

    saveTask(task: Task): Observable<any> {
        return of(task);
    }

    deleteTask(task: Task) {

    }
}