import { Component } from '@angular/core';
import { PushNotificationService } from './common-components/push-notifications/push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home task manager';

  constructor(public notificationService: PushNotificationService){
    notificationService.request();
  }
}
