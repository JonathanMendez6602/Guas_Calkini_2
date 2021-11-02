import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { IndexUsuarioComponent } from './index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';


@NgModule({
  declarations: [IndexUsuarioComponent, CreateUsuarioComponent, EditUsuarioComponent, LoginUsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
