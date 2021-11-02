import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GruaRoutingModule } from './grua-routing.module';
import { IndexGruaComponent } from './index-grua/index-grua.component';
import { CreateGruaComponent } from './create-grua/create-grua.component';
import { EditGruaComponent } from './edit-grua/edit-grua.component';
import { ViewGruaComponent } from './view-grua/view-grua.component';


@NgModule({
  declarations: [IndexGruaComponent, CreateGruaComponent, EditGruaComponent, ViewGruaComponent],
  imports: [
    CommonModule,
    GruaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class GruaModule { }
