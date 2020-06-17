import { NgModule } from "@angular/core";
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login.service';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthenticationRoutingModule
    ],
    providers: [
        LoginService
    ]
})
export class AuthenticationModule { }