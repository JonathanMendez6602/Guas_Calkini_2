import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'corralon', redirectTo: 'corralon/index', pathMatch: 'full'},
  { path: 'corralon/index', component: IndexComponent },
  { path: 'corralon/create', component: CreateComponent },
  { path: 'person/edit/:idCorralon', component: EditComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorralonRoutingModule { }
