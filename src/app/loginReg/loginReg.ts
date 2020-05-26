import { Component } from "@angular/core";

@Component({
    templateUrl: './login-form.component.html'
})
export class Login_Res {
    name: String;
    password: String;

    //TODO: een functie maken die de data van hier doorgeeft naar user of de database
    exportToUser(){

    }

    exportToDatabase(){
        
    }
}