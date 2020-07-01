import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MessageService } from '../common-components/message-box/message.service';
import { createMessage } from '../common-components/message-box/message';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
     
    constructor(private messageService: MessageService) {  }

    intercept(request: HttpRequest<any>, next: HttpHandler){
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if(error.status == 403){
                    this.messageService.setMessage(createMessage("error", "Account niet gevonden"));
                }

                return throwError(error.error);
            })
        );
    }
}