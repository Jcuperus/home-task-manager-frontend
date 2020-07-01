import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[appReadableBackground]'
})
export class ReadableBackgroundDirective implements OnInit {
    
    @Input() appReadableBackground: string;

    color: string;
    
    constructor(private element: ElementRef) {}

    ngOnInit() {
        let color = this.getColor(this.appReadableBackground);
        this.element.nativeElement.style.color = color;
        this.element.nativeElement.style.borderColor = color;
    }

    getColor(backgroundColor: string): string {
        if (!this.color) {
            let color = backgroundColor.substring(1);
            let rgb = parseInt(color, 16);
            let r = (rgb >> 16) & 0xff;
            let g = (rgb >> 8)  & 0xff;
            let b = (rgb >> 0)  & 0xff;
    
            let luma =  0.216 * r + 0.7152 * g + 0.0722 * b;
    
            if (luma < 128) {
                this.color = "#ffffff";
            } else {
                this.color = "#000000";
            }
        }

        return this.color;
    }
}