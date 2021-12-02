import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexCatalogoComponent } from './index-catalogo/index-catalogo.component';
import { CreateCatalogoComponent } from './create-catalogo/create-catalogo.component';
import { EditCatalogoComponent } from './edit-catalogo/edit-catalogo.component';
import { AgregarCatalogoComponent } from './agregar-catalogo/agregar-catalogo.component';
import { AgregarAseguradoraCatalogoComponent } from './agregar-aseguradora-catalogo/agregar-aseguradora-catalogo.component';
import { EditSucursalComponent } from './edit-sucursal/edit-sucursal.component';
import { EditAseguradoraComponent } from './edit-aseguradora/edit-aseguradora.component';


const routes: Routes = [
  { path: 'catalogo', redirectTo: 'catalogo/indexCatalogo', pathMatch: 'full'}, 
  { path: 'catalogo/indexCatalogo', component: IndexCatalogoComponent},
  { path: 'catalogo/createCatalogo', component: CreateCatalogoComponent},
  { path: 'catalogo/agregarCatalogo', component: AgregarCatalogoComponent},
  { path: 'catalogo/agregarAseguradoraCatalogo', component: AgregarAseguradoraCatalogoComponent},
  { path: 'catalogo/editCatalogo/:idCatalogo', component: EditCatalogoComponent},
  { path: 'catalogo/editAseguradora/:idAseguradora', component: EditAseguradoraComponent},
  { path: 'catalogo/editSucursal/:idSucursal', component: EditSucursalComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
