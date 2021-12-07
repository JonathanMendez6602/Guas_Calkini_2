import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { IndexCatalogoComponent } from './index-catalogo/index-catalogo.component';
import { EditCatalogoComponent } from './edit-catalogo/edit-catalogo.component';
import { CreateCatalogoComponent } from './create-catalogo/create-catalogo.component';
import { AgregarCatalogoComponent } from './agregar-catalogo/agregar-catalogo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarAseguradoraCatalogoComponent } from './agregar-aseguradora-catalogo/agregar-aseguradora-catalogo.component';
import { EditSucursalComponent } from './edit-sucursal/edit-sucursal.component';
import { EditAseguradoraComponent } from './edit-aseguradora/edit-aseguradora.component';



@NgModule({
  declarations: [
    IndexCatalogoComponent,
    EditCatalogoComponent,
    CreateCatalogoComponent,
    AgregarCatalogoComponent,
    AgregarAseguradoraCatalogoComponent,
    EditSucursalComponent,
    EditAseguradoraComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CatalogoModule { }
