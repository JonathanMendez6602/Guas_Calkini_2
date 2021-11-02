import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChoferRoutingModule } from './chofer-routing.module';
import { IndexChoferComponent } from './index-chofer/index-chofer.component';
import { CreateChoferComponent } from './create-chofer/create-chofer.component';
import { EditChoferComponent } from './edit-chofer/edit-chofer.component';
import { ViewChoferComponent } from './view-chofer/view-chofer.component';


@NgModule({
  declarations: [IndexChoferComponent, CreateChoferComponent, EditChoferComponent, ViewChoferComponent],
  imports: [
    CommonModule,
    ChoferRoutingModule
  ]
})
export class ChoferModule { }
