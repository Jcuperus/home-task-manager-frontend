import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { CommonComponentsModule } from '../common-components/common-components.module';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';



@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AuthenticationRoutingModule,
        CommonComponentsModule
    ],
    providers: [
        LoginService,
        RegisterService
    ]
})
export class AuthenticationModule { }