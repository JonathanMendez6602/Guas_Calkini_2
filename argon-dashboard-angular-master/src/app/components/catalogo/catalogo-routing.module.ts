import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexCatalogoComponent } from './index-catalogo/index-catalogo.component';
import { CreateCatalogoComponent } from './create-catalogo/create-catalogo.component';
import { EditCatalogoComponent } from './edit-catalogo/edit-catalogo.component';
import { CreateSucursalComponent } from './create-sucursal/create-sucursal.component';
import { EditSucursalComponent } from './edit-sucursal/edit-sucursal.component';
import { CreateAseguradoraComponent } from './create-aseguradora/create-aseguradora.component';
import { EditAseguradoraComponent } from './edit-aseguradora/edit-aseguradora.component';

const routes: Routes = [
  { path: 'catalogo', redirectTo: 'catalogo/indexCatalogo', pathMatch: 'full'}, 
  { path: 'catalogo/indexCatalogo', component: IndexCatalogoComponent},
  { path: 'catalogo/createCatalogo', component: CreateCatalogoComponent},
  { path: 'catalogo/editCatalogo/:idCatalogo', component: EditCatalogoComponent},
  { path: 'catalogo/createSucursal', component: CreateSucursalComponent},
  { path: 'catalogo/editSucursal/:idSucursal', component: EditSucursalComponent},
  { path: 'catalogo/createAseguradora', component: CreateAseguradoraComponent},
  { path: 'catalogo/editAseguradora/:idAseguradora', component: EditAseguradoraComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
