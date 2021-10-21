import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorralonRoutingModule } from './corralon-routing.module';

import { IndexCorralonComponent } from './index-corralon/index-corralon.component';
import { EditCorralonComponent } from './edit-corralon/edit-corralon.component';
import { CreateCorralonComponent } from './create-corralon/create-corralon.component';


@NgModule({
  declarations: [
    
    IndexCorralonComponent,
    EditCorralonComponent,
    CreateCorralonComponent
  ],
  imports: [
    CommonModule,
    CorralonRoutingModule
  ]
})
export class CorralonModule { }
