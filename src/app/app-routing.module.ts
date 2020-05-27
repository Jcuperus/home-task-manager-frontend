import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(module => module.TasksModule) },
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: '**', component: PageNotFoundComponent, data: { title: '404' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
