import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

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
        AuthenticationService
    ]
})
export class AuthenticationModule { }