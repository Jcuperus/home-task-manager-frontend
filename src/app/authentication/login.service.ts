import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../users/user';

@Injectable()
export class LoginService {

    loginUrl = "http://localhost:8080/users/";

    constructor(private http: HttpClient) { }

    public login(name: String, pass: String) {
        return this.http.post<any>("http://localhost:8080/login", {username: name, password: pass}, {observe: 'response'})
            .pipe(map(response => this.saveToken(response)));
    }

    private saveToken(response: HttpResponse<any>){
        if(response.headers.has("Authorization")){
            localStorage.setItem("token", response.headers.get('Authorization').replace("Bearer ", ""));
            return "token has been stored";
        }
        return "No token found";
    }
    
    public getUser(id: number): Observable<User>{
        if(id) {
            this.http.get<User>(this.loginUrl + id)
                .subscribe(resp => { return ({ "username": resp.username, "password": resp.password }) });
        }
        return null;
    }

}