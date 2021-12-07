import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InventarioRoutingModule } from './inventario-routing.module';
import { IndexInventarioComponent } from './index-inventario/index-inventario.component';
import { CreateInventarioComponent } from './create-inventario/create-inventario.component';
import { EditInventarioComponent } from './edit-inventario/edit-inventario.component';


@NgModule({
  declarations: [
    IndexInventarioComponent,
    CreateInventarioComponent,
    EditInventarioComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InventarioModule { }
