import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'dynamic-field',
    templateUrl: './dynamic-field.component.html'
})
export class DynamicFieldComponent{
    @Input() fields: FormGroup;
}