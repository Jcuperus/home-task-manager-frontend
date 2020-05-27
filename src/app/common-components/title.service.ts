import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
    private titleUpdatedSource = new Subject<string>();
    $titleUpdated = this.titleUpdatedSource.asObservable();
    
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
            })
        ).subscribe(title => {
            this.setTitle(title);
        });
    }

    getTitle() {
        return this.titleService.getTitle();
    }

    setTitle(title: string) {
        this.titleService.setTitle(title);
        this.titleUpdatedSource.next(title);
    }
}