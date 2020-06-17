import { Component, OnInit } from "@angular/core";

import { LoginService } from "./login.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{  

    name: String;
    password: String;

    constructor(private log: LoginService) {}

    ngOnInit(){
        this.log.login();
    }
}