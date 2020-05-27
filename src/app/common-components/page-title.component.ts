import { Component } from "@angular/core";
import { TitleService } from './title.service';

@Component({
    selector: 'app-page-title',
    template: '<h1>{{ title }}</h1>'
})
export class PageTitleComponent {
    title: string;

    constructor(titleService: TitleService) {
        titleService.$titleUpdated.subscribe(title => this.title = title);
    }
}