import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CheckboxItem } from './checkbox-item';
import { User } from 'src/app/users/user';

@Component({
    selector: 'app-checkbox-group',
    templateUrl: './checkbox-group.component.html',
    styles: ['ul { list-style-type: none; padding-left: 10px; }']
})
export class CheckboxGroupComponent {
    @Input() checkboxItems: CheckboxItem[];
    @Output() onSelectionChange = new EventEmitter<CheckboxItem[]>();

    onSelect(selectedCheckboxItem: CheckboxItem) {
        this.onSelectionChange.emit(this.checkboxItems.filter(checkboxItem => checkboxItem.checked));
    }
}