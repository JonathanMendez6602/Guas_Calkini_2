import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {ViewComponent} from './view/view.component';
  
const routes: Routes = [
  { path: 'vehiculo', redirectTo: 'person/index', pathMatch: 'full'},
  { path: 'vehiculo/index', component: IndexComponent },
  { path: 'vehiculo/create', component: CreateComponent },
  { path: 'vehiculo/edit/:idVehiculo', component: EditComponent }, 
  { path: 'vehiculo/view/:idVehiculo', component: ViewComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VehiculoRoutingModule { }
