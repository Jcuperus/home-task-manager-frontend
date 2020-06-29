import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupFormComponent } from './group-form/group-form.component';


const routes: Routes = [
    { path: 'create', component: GroupFormComponent, data: { title: 'Create new group'}},
    { path: ':id', component: GroupFormComponent, data: { title: 'Edit group'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class GroupRoutingModule{}