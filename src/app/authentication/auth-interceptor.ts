import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    tokenPrefix = "Bearer ";
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYWVwIiwiZXhwIjoxNTkzMTg0OTU5fQ.aL9XNwdN1lvcr4mF1QJimy1pCYZtPMUGXuNRklnEWymJ89p5y3Y0f_LdOkIkj1Ygt8wnR0mM7X18leb7sIBluQ";

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const authRequest = request.clone({
            headers: request.headers.set('Authorization', this.tokenPrefix + this.token)
        });
        
        return next.handle(authRequest);
    }
}