import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { IndexChoferComponent } from 'src/app/components/chofer/index-chofer/index-chofer.component';
import { CreateChoferComponent } from 'src/app/components/chofer/create-chofer/create-chofer.component';
import { EditChoferComponent } from 'src/app/components/chofer/edit-chofer/edit-chofer.component';
import { IndexComponent } from 'src/app/components/vehiculo/index/index.component';
import { CreateComponent } from 'src/app/components/vehiculo/create/create.component';
import { EditComponent } from 'src/app/components/vehiculo/edit/edit.component';
import { IndexCorralonComponent } from 'src/app/components/corralon/index-corralon/index-corralon.component';
import { CreateCorralonComponent } from 'src/app/components/corralon/create-corralon/create-corralon.component';
import { EditCorralonComponent } from 'src/app/components/corralon/edit-corralon/edit-corralon.component';
import { AgregarCorralonComponent } from 'src/app/components/corralon/agregar-corralon/agregar-corralon.component';
import { IndexGruaComponent } from 'src/app/components/grua/index-grua/index-grua.component';
import { CreateGruaComponent } from 'src/app/components/grua/create-grua/create-grua.component';
import { EditGruaComponent } from 'src/app/components/grua/edit-grua/edit-grua.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'indexChofer', component: IndexChoferComponent},
    { path: 'vehiculo/index', component: IndexComponent },
    { path: 'vehiculo/create', component: CreateComponent },
    { path: 'vehiculo/edit/:idVehiculo', component: EditComponent }, 
    { path: 'corralon/indexCorralon', component: IndexCorralonComponent },
    { path: 'corralon/createCorralon/:idVehiculo', component: CreateCorralonComponent },
    { path: 'corralon/editCorralon/:idCorralon', component: EditCorralonComponent },
    { path: 'corralon/agregarCorralon', component: AgregarCorralonComponent},
    { path: 'chofer/indexChofer', component: IndexChoferComponent },
    { path: 'chofer/createChofer', component: CreateChoferComponent },
    { path: 'chofer/editChofer/:idChofer', component: EditChoferComponent },
    { path: 'grua/indexGrua', component: IndexGruaComponent },
    { path: 'grua/createGrua', component: CreateGruaComponent },
    { path: 'grua/editGrua/:idGrua', component: EditGruaComponent },
];
