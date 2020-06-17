import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    tokenPrefix = "Bearer ";
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0dXNlciIsImV4cCI6MTU5MzI0NjA5M30.OZg3fkeqCZsDYMy8AxgjVKJnLw9MF3nDjYF8hvW-7S1mzGlw8DtoWlQTLOJzZHQGZUZ8l54huevKd24MlO2E3A";

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const authRequest = request.clone({
            headers: request.headers.set('Authorization', this.tokenPrefix + this.token)
        });
        
        return next.handle(authRequest);
    }
}