import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorralonRoutingModule } from './corralon-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexCorralonComponent } from './index-corralon/index-corralon.component';
import { EditCorralonComponent } from './edit-corralon/edit-corralon.component';
import { CreateCorralonComponent } from './create-corralon/create-corralon.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
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
