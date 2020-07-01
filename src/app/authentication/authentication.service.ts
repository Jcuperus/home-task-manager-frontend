import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { createMessage } from '../common-components/message-box/message';
import { MessageService } from '../common-components/message-box/message.service';
import { MessageResponse } from '../common-http/message-response';
import { User } from '../users/user';
import { Credentials } from './credentials';

@Injectable()
export class AuthenticationService {
    
    private notifyLoginSource = new Subject<boolean>();
    notifyLogin$ = this.notifyLoginSource.asObservable();

    tokenKey = 'Authorization';
    currentUserKey = 'currentUser';

    constructor(private http: HttpClient, private messageService: MessageService) {  }
    
    login(credentials: Credentials): Observable<MessageResponse> {
        return this.http.post<any>("login", credentials, { observe: 'response' })
            .pipe(
                catchError(this.catchForbiddenError), 
                map(response => {
                    const token = response.headers.get(this.tokenKey);

                    if (token) {
                        this.setToken(token);
                    }

                    return { message: 'User logged in successfully' };
                })
            );
    }

    register(credentials: Credentials): Observable<MessageResponse> {
        return this.http.post<any>("users/create", credentials);
    }

    getCurrentUser(): Observable<User> {
        let currentUser = JSON.parse(localStorage.getItem(this.currentUserKey));
        
        if (currentUser && currentUser instanceof User) {
            return of(currentUser);
        } else if (this.getToken() != null) {
            return this.http.get('users/current').pipe(map((user: User) => {
                this.setCurrentUser(user);
                return user;
            }));
        }

        return of(null);
    }

    setCurrentUser(user: User) {
        localStorage.setItem(this.currentUserKey, JSON.stringify(user));
    }

    checkToken(){
        if(localStorage.getItem("Authorization")){
            this.http.post("users/check", localStorage.getItem("Authorization")).subscribe(
                resp => this.messageService.setMessage(createMessage('success', resp.toString())),
                error => this.messageService.setMessage(createMessage('error', error))
            );
        }
    }

    getToken(): string {
        return localStorage.getItem(this.tokenKey);
    }

    setToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    notifyLoggedIn() {
        this.notifyLoginSource.next(true);
    }

    private catchForbiddenError(error: HttpErrorResponse) {
        let message = "";
        
        if (error.status == 403) {
            message = "Error: Login details incorrect";
        } else {
            message = `Error ${error.status}: ${error.message}`;
        }


        return throwError(message);
    }
}