import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from 'angular/common.http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageTitleComponent } from './page-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PageNotFoundComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    //After browsermodule HttpClientModule      dit zou hier moeten voor servercommunicatie 'S. Kuiper'
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
