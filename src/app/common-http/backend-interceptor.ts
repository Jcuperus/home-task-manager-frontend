import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    
    backendUrl = "http://tasks.jaep.nl";
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request.clone({ url: `${this.backendUrl}/${request.url}` }));
    }
    
}