import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingRoutingModule } from './app.routing';
import { TeamsComponent } from './pages/teams/teams.component';
import { TeamsModule } from './pages/teams/module/teams/teams.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule,
    TeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
