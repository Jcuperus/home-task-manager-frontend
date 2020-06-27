import { Injectable, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { of, Observable } from 'rxjs';

import { HttpClient, HttpResponse } from '@angular/common/http';

import { User } from '../users/user';
import { templateJitUrl } from '@angular/compiler';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginService{

    loginUrl = "http://localhost:8080/users/";


    constructor(private http: HttpClient) { }

    public login(name: String, pass: String) {
        return this.http.post<any>("http://localhost:8080/login", {username: name, password: pass}, {observe: 'response'})
        .pipe(
            map(response => 
                this.saveToken(response))
        );
    }

    private saveToken(response: HttpResponse<any>){
        if(response.headers.has("Authorization")){
            localStorage.setItem("token", response.headers.get('Authorization').replace("Bearer ", ""));
            return "token has been stored";
        }
        return "No token found";
    }

    // public validateUser(name: String, pass: String): boolean{
    //     this.http.post<boolean>(this.loginUrl + "val", {username: name, password: pass})
    //     .subscribe(resp => {
    //         console.log(resp);
    //     });
    //     return null;
    // }
    
    public getUser(id: number): Observable<User>{
        if(id){
            this.http.get<User>(this.loginUrl + id, { responseType: 'json'})
            .subscribe(resp => {
                return ({"username": resp.username, 
                        "password": resp.password});
            })
        }
        return null;
    }

}