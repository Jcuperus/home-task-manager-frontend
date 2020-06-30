import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PushNotificationService{
    permission: Permission;

    constructor(){
        if(this.isSupported()){
            this.permission = 'default';
        }
        else{
            this.permission = 'denied';
        }
    }

    isSupported(): boolean{
        return 'Notification' in window;
    }

    request(){
        if(this.isSupported()){
            Notification.requestPermission(status => this.permission = status)
        }
    }

    createNotification(title: string, options: PushNotification): Observable<any>{
        let self = this;
        return new Observable(observable => {
            if(!('Notification' in window) || (self.permission == 'denied')){
                observable.complete();
            }

            let ntf = new Notification(title, options);
            ntf.onshow = e => {
                return observable.next({ notification: ntf, event: e});
            }

            ntf.onclick = e => {
                return observable.next({ notification: ntf, event: e});
            }

            ntf.onclose = () => {
                return observable.complete();
            }
        })
    }

    makeNotification(source: Array<any>){
        for(let item of source){
            let options = {body: item.alertContent};
            this.createNotification(item.title, options).subscribe();
        }
    }

}

export declare type Permission = 'denied' | 'granted' | 'default';

export interface PushNotification{
    body?: string;
    icon?: string;
    tag?: string;
    data?: any;
    renotify?: boolean;
    silent?: boolean;
    sound?: string;
    noscreen?: boolean;
    sticky?: boolean;
    dir?: 'auto' | 'ltr' | 'rtl';
    lang?: string;
}