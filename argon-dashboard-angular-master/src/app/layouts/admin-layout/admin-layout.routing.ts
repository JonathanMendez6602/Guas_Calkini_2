import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { IndexComponent } from '../../pages/vehiculo/index/index.component';
import { CreateComponent } from '../../pages/vehiculo/create/create.component';
import { EditComponent } from '../../pages/vehiculo/edit/edit.component';

import { IndexCorralonComponent } from 'src/app/pages/corralon/index-corralon/index-corralon.component';
import { CreateCorralonComponent } from 'src/app/pages/corralon/create-corralon/create-corralon.component';
import { EditCorralonComponent } from 'src/app/pages/corralon/edit-corralon/edit-corralon.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'vehiculo/index', component: IndexComponent },
    { path: 'vehiculo/create', component: CreateComponent },
    { path: 'vehiculo/edit/:idVehiculo', component: EditComponent },

    { path: 'corralon/indexCorralon', component: IndexCorralonComponent },
    { path: 'corralon/createCorralon', component: CreateCorralonComponent },
    { path: 'corralon/editCorralon', component: EditCorralonComponent }
];
