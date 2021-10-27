import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorralonRoutingModule } from './corralon-routing.module';

import { IndexCorralonComponent } from './index-corralon/index-corralon.component';
import { EditCorralonComponent } from './edit-corralon/edit-corralon.component';
import { CreateCorralonComponent } from './create-corralon/create-corralon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarCorralonComponent } from './agregar-corralon/agregar-corralon.component';
import { FilterPipe } from './pipe/filter.pipe';


@NgModule({
  declarations: [
    
    IndexCorralonComponent,
    EditCorralonComponent,
    CreateCorralonComponent,
    AgregarCorralonComponent,
    FilterPipe

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CorralonRoutingModule

  ]
})
export class CorralonModule { }
