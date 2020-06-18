import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { User } from '../groups/user';

@Injectable()
export class RegisterService {

    registerUrl = "http://localhost:8080/users/";

    constructor(private http: HttpClient) {  }

    public create(name: String, pass: String){
        console.log(name, pass)
        this.http.post<any>(this.registerUrl + "create", {
            username: name,
            password: pass
        }).subscribe(resp => console.log(resp));
        console.log("nu een user")
        
        return "account has been created";
    }

}