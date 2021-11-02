import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AseguradoraRoutingModule } from './aseguradora-routing.module';
import { IndexAseguradoraComponent } from './index-aseguradora/index-aseguradora.component';
import { CreateAseguradoraComponent } from './create-aseguradora/create-aseguradora.component';
import { EditAseguradoraComponent } from './edit-aseguradora/edit-aseguradora.component';


@NgModule({
  declarations: [IndexAseguradoraComponent, CreateAseguradoraComponent, EditAseguradoraComponent],
  imports: [
    CommonModule,
    AseguradoraRoutingModule
  ]
})
export class AseguradoraModule { }
