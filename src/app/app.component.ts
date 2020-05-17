import { Component } from '@angular/core';
import { TitleService } from './title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home task manager';

  constructor(private titleService: TitleService) {
    // titleService.$titleUpdated.subscribe(title => {
    //   this.title = title;
    // });
  }
}
