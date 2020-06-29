import { CheckboxItem } from '../common-components/checkbox-group/checkbox-item';
import { User } from '../users/user';

export interface Group {
    id?: number;
    name: string;
    users?: User[];
    color: string;
}

export class GroupCheckboxItemAdapter implements Group, CheckboxItem {
    id?: number;
    name: string;
    color: string
    value: string;
    label: string;
    checked: boolean;

    constructor(group: Group, checked?: boolean) {
        this.id = group.id;
        this.name = group.name;
        this.value = group.id.toString();
        this.label = group.name;
        this.checked = checked ? checked : false;
        this.color = group.color;
    }
    
}