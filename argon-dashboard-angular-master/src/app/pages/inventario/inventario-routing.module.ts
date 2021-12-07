import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexInventarioComponent } from './index-inventario/index-inventario.component';
import { CreateInventarioComponent } from './create-inventario/create-inventario.component';
import { EditInventarioComponent } from './edit-inventario/edit-inventario.component';

const routes: Routes = [
  { path: 'inventario', redirectTo: 'inventario/indexInventario', pathMatch: 'full'},
  { path: 'inventario/indexInventario', component: IndexInventarioComponent },
  { path: 'inventario/createInventario', component: CreateInventarioComponent },
  { path: 'inventario/editInventario/:idInventario', component: EditInventarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
