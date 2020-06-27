import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CheckboxItem } from './checkbox-item';

@Component({
    selector: 'app-checkbox-group',
    templateUrl: './checkbox-group.component.html',
    styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent {
    @Input() checkboxItems: CheckboxItem[];
    @Output() onSelectionChange = new EventEmitter<CheckboxItem[]>();

    onSelect(selectedCheckboxItem: CheckboxItem) {
        this.onSelectionChange.emit(this.checkboxItems.filter(checkboxItem => checkboxItem.checked));
    }
}