import { Component } from "@angular/core";
import { CheckboxGroupComponent } from 'src/app/common-components/checkbox-group/checkbox-group.component';

@Component({
    selector: 'app-groups-list',
    templateUrl: './groups-list.component.html',
    styleUrls: ['./groups-list.component.css', '../../common-components/checkbox-group/checkbox-group.component.css']
})
export class GroupsListComponent extends CheckboxGroupComponent {}