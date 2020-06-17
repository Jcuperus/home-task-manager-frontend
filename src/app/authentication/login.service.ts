import { Injectable, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService{

    loginUrl = "http://localhost:8080/users/";


    constructor(private http: HttpClient) { }

    public login() {
        this.http.post<any>("http://localhost:8080/login", {username: "Piet", password: "test"}, {observe: 'response'})
        .subscribe(resp => {
            localStorage.setItem("token", resp.headers.get('Authorization').replace("Bearer ", ""));
        });
    }
}