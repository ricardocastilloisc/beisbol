import { ngModuleJitUrl } from '@angular/compiler';
import { Route } from "@angular/compiler/src/core";
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { TeamsModule } from './pages/teams/module/teams/teams.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home',  pathMatch:'full'},
  { path: 'teams',  loadChildren: () =>  TeamsModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingRoutingModule {}
