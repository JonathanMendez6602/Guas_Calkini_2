import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
  
const routes: Routes = [
  { path: 'vehiculo', redirectTo: 'person/index', pathMatch: 'full'},
  { path: 'pages/icons', component: IconsComponent },
  {path: 'pages/maps', component: MapsComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VehiculoRoutingModule { }
