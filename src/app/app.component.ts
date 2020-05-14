import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home task manager';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.activatedRoute.firstChild;

        while (child.firstChild) {
          child = child.firstChild;
        }

        if (child.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }

        return this.title;
      })
    ).subscribe(title => {
      this.titleService.setTitle(title);
    })
  }
}
