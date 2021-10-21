import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorralonRoutingModule } from './corralon-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CorralonRoutingModule
  ]
})
export class CorralonModule { }
