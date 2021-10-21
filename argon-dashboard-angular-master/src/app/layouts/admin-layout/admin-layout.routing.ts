import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {IndexComponent} from '../../pages/vehiculo/index/index.component';
import { CreateComponent } from '../../pages/vehiculo/create/create.component';
import { EditComponent } from '../../pages/vehiculo/edit/edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'vehiculo/index',          component: IndexComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'vehiculo/create',           component: CreateComponent },
    { path: 'vehiculo/edit',           component: EditComponent }
];
