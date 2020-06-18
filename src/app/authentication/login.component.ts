import { Component} from "@angular/core";

import { LoginService } from "./login.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {  

    name: String;
    password: String;

    constructor(private log: LoginService) {}

    login(){
        this.log.login(this.name, this.password)
        .subscribe(resp => 
            console.log(resp));
    }
}