import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction, throwError } from 'rxjs';
import { Credentials } from './credentials';
import { MessageResponse } from '../common-http/message-response';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class AuthenticationService {
    
    tokenKey = 'Authorization';

    constructor(private http: HttpClient) {  }
    
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

    getToken(): string {
        return localStorage.getItem(this.tokenKey);
    }

    setToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
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