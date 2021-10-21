import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapsComponent } from './maps/maps.component';


const routes: Routes = [
  { path: 'maps', redirectTo: 'pages/maps', pathMatch: 'full'},
  { path: 'pages/maps', component: MapsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
