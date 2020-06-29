import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../groups/group';
import { Task } from './task';
import { MessageResponse } from '../common-http/message-response';
import { map } from 'rxjs/operators';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MessageService } from '../common-components/message-box/message.service';
import { createMessage } from '../common-components/message-box/message';
import { TasksComponent } from './tasks.component';
import { Router } from '@angular/router';

@Injectable()
export class TaskService {

    constructor(private http: HttpClient, private messageService: MessageService, private router: Router) { }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>('tasks/' + id)
            .pipe(map(task => {
                if (typeof task.dueDate == "string") task.dueDate = new Date(task.dueDate);
                return task;
            }));
    }

    getTasks(groups?: Group[]): Observable<Task[]> {
        const options = {};
        
        if (groups && groups.length > 0) {
            options['params'] = {
                group: groups.map(group => group.id)
            };
        }
        
        return this.http.get<Task[]>('tasks/', options)
            .pipe(map(tasks => {
                tasks.map(task => {
                    if (typeof(task.dueDate) == "string") task.dueDate = new Date(task.dueDate);
                })
                
                return tasks;
            }));
    }

    finishTasks(id: number) {
        this.http.put('tasks/' + id, id).
        subscribe(resp => {
            this.messageService.setMessage(createMessage('success', resp.toString()));
        });
    }

    deleteTask(id: number) {
        this.http.post('tasks/' + id, id).
        subscribe(resp => this.getTasks());
    }

    saveTask(task: Task): Observable<MessageResponse> {
        if (task.id) {
            return this.http.put<MessageResponse>('tasks/', task);
        }

        return this.http.post<MessageResponse>('tasks/', task);
    }
}