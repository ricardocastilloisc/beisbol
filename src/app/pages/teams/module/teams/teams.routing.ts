import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from '../../teams.component';



const routes: Routes = [
{ path: '', component: TeamsComponent },
{ path: '**', redirectTo: '',  pathMatch:'full'},

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class TeamsRoutingModule {
}
