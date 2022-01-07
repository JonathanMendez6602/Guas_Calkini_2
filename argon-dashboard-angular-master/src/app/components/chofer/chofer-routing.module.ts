import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexChoferComponent } from './index-chofer/index-chofer.component';
import { CreateChoferComponent } from './create-chofer/create-chofer.component';
import { EditChoferComponent } from './edit-chofer/edit-chofer.component';

const routes: Routes = [
    { path: 'chofer', redirectTo: 'chofer/indexChofer', pathMatch: 'full'},
    { path: 'chofer/indexChofer', component: IndexChoferComponent },
    { path: 'chofer/createChofer', component: CreateChoferComponent },
    { path: 'chofer/editChofer/:idChofer', component: EditChoferComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoferRoutingModule { }
