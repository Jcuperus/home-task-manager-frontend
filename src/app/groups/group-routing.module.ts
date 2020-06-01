import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupListComponent } from './group-list.component';
import { GroupFormComponent } from './group-form.component';

const routes: Routes = [
    { path: 'create', component: GroupFormComponent, data: { title: 'Create new group'}},
    { path: ':id', component: GroupFormComponent, data: { title: 'Edit group'}},
    { path: '', component: GroupListComponent, data: { title: 'List of groups'}}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GroupRoutingModule{}