import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorralonRoutingModule } from './corralon-routing.module';

import { IndexCorralonComponent } from './index-corralon/index-corralon.component';
import { EditCorralonComponent } from './edit-corralon/edit-corralon.component';
import { CreateCorralonComponent } from './create-corralon/create-corralon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    IndexCorralonComponent,
    EditCorralonComponent,
    CreateCorralonComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CorralonRoutingModule

  ]
})
export class CorralonModule { }
