import { Component } from "@angular/core";

@Component({
    templateUrl: './reg-form.component.html'
})
export class RegComponent {
    name: String;
    password: String;

    constructor() {
    }

    //Dit is nu nog een test form zonder enige connectie.
    setdata(name){
        this.name = name;
    }
}