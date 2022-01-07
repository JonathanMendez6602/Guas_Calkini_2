import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { IndexCatalogoComponent } from './index-catalogo/index-catalogo.component';
import { CreateAseguradoraComponent } from './create-aseguradora/create-aseguradora.component';
import { EditAseguradoraComponent } from './edit-aseguradora/edit-aseguradora.component';
import { CreateSucursalComponent } from './create-sucursal/create-sucursal.component';
import { EditSucursalComponent } from './edit-sucursal/edit-sucursal.component';
import { CreateCatalogoComponent } from './create-catalogo/create-catalogo.component';
import { EditCatalogoComponent } from './edit-catalogo/edit-catalogo.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCatalogoPipe } from './pipe/filter-catalogo.pipe';
import { FilterSucursalPipe } from './pipe_sucursal/filter-sucursal.pipe';
import { FilterAseguradoraPipe } from './pipe_aseguradora/filter-aseguradora.pipe';



@NgModule({
  declarations: [
    IndexCatalogoComponent,
    CreateAseguradoraComponent,
    EditAseguradoraComponent,
    CreateSucursalComponent,
    EditSucursalComponent,
    CreateCatalogoComponent,
    EditCatalogoComponent,
    FilterCatalogoPipe,
    FilterSucursalPipe,
    FilterAseguradoraPipe,
    
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CatalogoModule { }
