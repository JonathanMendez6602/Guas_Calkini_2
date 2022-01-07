import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexGruaComponent } from './index-grua/index-grua.component';
import { CreateGruaComponent } from './create-grua/create-grua.component';
import { EditGruaComponent } from './edit-grua/edit-grua.component';

const routes: Routes = [
  { path: 'grua', redirectTo: 'grua/indexGrua', pathMatch: 'full'},
  { path: 'grua/indexGrua', component: IndexGruaComponent },
  { path: 'grua/createGrua', component: CreateGruaComponent },
  { path: 'grua/editGrua/:idGrua', component: EditGruaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GruaRoutingModule { }
