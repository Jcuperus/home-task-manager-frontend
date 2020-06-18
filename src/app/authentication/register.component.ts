import { Component } from "@angular/core";
import { RegisterService } from './register.service';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    
    name: String;
    password: String;

    constructor(private reg: RegisterService) {  }

    public create(){
        this.reg.create(this.name, this.password);
    }
}