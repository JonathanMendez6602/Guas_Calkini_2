import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexChoferComponent } from 'src/app/pages/chofer/index-chofer/index-chofer.component';
import { CreateChoferComponent } from 'src/app/pages/chofer/create-chofer/create-chofer.component';
import { EditChoferComponent } from 'src/app/pages/chofer/edit-chofer/edit-chofer.component';
import { ViewChoferComponent } from 'src/app/pages/chofer/view-chofer/view-chofer.component';

const routes: Routes = [
    { path: 'chofer', redirectTo: 'chofer/indexChofer', pathMatch: 'full'},
    { path: 'chofer/indexChofer', component: IndexChoferComponent },
    { path: 'chofer/createChofer', component: CreateChoferComponent },
    { path: 'chofer/editChofer/:idChofer', component: EditChoferComponent },
    { path: 'chofer/viewChofer/:idChofer', component: ViewChoferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChoferRoutingModule { }
