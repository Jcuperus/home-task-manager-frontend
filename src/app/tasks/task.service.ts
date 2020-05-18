import { Injectable } from '@angular/core';
import { Task } from './task';
import { of, Observable } from 'rxjs';

import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {
    getTask(id: number): Observable<Task> {
        return of(TASKS[id]);
    }

    getTasks(): Observable<Task[]> {
        return of(TASKS);
    }
}