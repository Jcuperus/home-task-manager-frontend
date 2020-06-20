import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const token = this.authenticationService.getToken();
        
        if (token) {
            return next.handle(request.clone({
                headers: request.headers.set(this.authenticationService.tokenKey, token)
            }));
        }
        
        return next.handle(request);
    }
}