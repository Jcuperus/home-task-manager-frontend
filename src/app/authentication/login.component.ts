import { Component} from "@angular/core";

import { LoginService } from "./login.service";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {  

    name: String;
    password: String;

    constructor(private log: LoginService) {}

    login(){
        this.log.login(this.name, this.password).pipe(
            catchError(errorResp => {
                console.log(errorResp);
                return throwError("Something happened")
            })
        )
        .subscribe();
    }
}