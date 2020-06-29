import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageResponse } from '../common-http/message-response';
import { Group } from '../groups/group';
import { Task } from './task';
import { MessageService } from '../common-components/message-box/message.service';
import { createMessage } from '../common-components/message-box/message';

@Injectable()
export class TaskService {

    private taskChangedSource = new Subject<Task>();
    taskChanged$ = this.taskChangedSource.asObservable();
    messageService: MessageService;

    constructor(private http: HttpClient) { }

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
        this.http.put('tasks/' + id, {});
    }

    saveTask(task: Task): Observable<MessageResponse> {
        if (task.id) {
            return this.http.put<MessageResponse>('tasks/', task);
        }

        return this.http.post<MessageResponse>('tasks/', task);
    }

    deleteTask(id: number) {
        return this.http.delete<MessageResponse>("tasks/" + id);
    }

    emitTaskChange(task: Task) {
        this.taskChangedSource.next(task);
    }
}