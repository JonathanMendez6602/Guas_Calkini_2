import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChoferRoutingModule } from './chofer-routing.module';
import { IndexChoferComponent } from './index-chofer/index-chofer.component';
import { CreateChoferComponent } from './create-chofer/create-chofer.component';
import { EditChoferComponent } from './edit-chofer/edit-chofer.component';
import { FilterChoferPipe } from './pipe_chofer/filter-chofer.pipe';



@NgModule({
  declarations: [
    IndexChoferComponent, 
    CreateChoferComponent, 
    EditChoferComponent, 
    FilterChoferPipe
  ],
  imports: [
    CommonModule,
    ChoferRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class ChoferModule { }
