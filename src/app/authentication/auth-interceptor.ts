import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    tokenPrefix = "Bearer ";
    token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJQaWV0IiwiZXhwIjoxNTkzMjU3MDA1fQ.9zpFoHkic7HWzsowoVqCh6wUahbzFqoIffJjgknf4dqHuPYmZzsTMavzyryonnGtaNl35tFZtpoMg3B9r1iW9A";

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const authRequest = request.clone({
            headers: request.headers.set('Authorization', this.tokenPrefix + this.token)
        });
        
        return next.handle(authRequest);
    }
}