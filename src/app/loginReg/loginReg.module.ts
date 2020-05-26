import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LoginComponent } from './login.component';
import { RegComponent } from './reg.component'; 


@NgModule({
    declarations: [
        LoginComponent,
        RegComponent
    ],
    imports: [
        FormsModule
    ]
})
export class LoginModule {  }