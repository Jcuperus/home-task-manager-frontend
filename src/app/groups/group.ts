import { CheckboxItem } from '../common-components/checkbox-item';

export interface Group {
    id?: number;
    name: string;
}

export class GroupCheckboxItemAdapter implements Group, CheckboxItem {
    id?: number;
    name: string;
    value: string;
    label: string;
    checked: boolean = false;

    constructor(group: Group) {
        this.id = group.id;
        this.name = group.name;
        this.value = group.id.toString();
        this.label = group.name;
    }
    
}