import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexCorralonComponent } from './index-corralon/index-corralon.component';
import { CreateCorralonComponent } from './create-corralon/create-corralon.component';
import { EditCorralonComponent } from './edit-corralon/edit-corralon.component';


const routes: Routes = [
  { path: 'corralon', redirectTo: 'corralon/indexCorralon', pathMatch: 'full'},
  { path: 'corralon/indexCorralon', component: IndexCorralonComponent },
  { path: 'corralon/createCorralon/:idVehiculo', component: CreateCorralonComponent },
  { path: 'corralon/editCorralon/:idCorralon', component: EditCorralonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorralonRoutingModule { }
