import { Component } from "@angular/core";

@Component({
    templateUrl: './reg-form.component.html'
})
export class RegComponent {
    name: String;
    password: String;

    constructor() {
    }

    setdata(name){
        this.name = name;
    }
}