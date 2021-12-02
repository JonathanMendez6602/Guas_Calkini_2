import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';

import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

import { IndexComponent } from '../../pages/vehiculo/index/index.component';
import { CreateComponent } from '../../pages/vehiculo/create/create.component';
import { EditComponent } from '../../pages/vehiculo/edit/edit.component';
import { ViewComponent } from '../../pages/vehiculo/view/view.component';


import { IndexCorralonComponent } from 'src/app/pages/corralon/index-corralon/index-corralon.component';
import { CreateCorralonComponent } from 'src/app/pages/corralon/create-corralon/create-corralon.component';
import { EditCorralonComponent } from 'src/app/pages/corralon/edit-corralon/edit-corralon.component';
import { AgregarCorralonComponent } from 'src/app/pages/corralon/agregar-corralon/agregar-corralon.component';

import { IndexGruaComponent } from 'src/app/pages/grua/index-grua/index-grua.component';
import { CreateGruaComponent } from 'src/app/pages/grua/create-grua/create-grua.component';
import { EditGruaComponent } from 'src/app/pages/grua/edit-grua/edit-grua.component';
import { ViewGruaComponent } from 'src/app/pages/grua/view-grua/view-grua.component';

import { IndexChoferComponent } from 'src/app/pages/chofer/index-chofer/index-chofer.component';
import { CreateChoferComponent } from 'src/app/pages/chofer/create-chofer/create-chofer.component';
import { EditChoferComponent } from 'src/app/pages/chofer/edit-chofer/edit-chofer.component';
import { ViewChoferComponent } from 'src/app/pages/chofer/view-chofer/view-chofer.component';

import { IndexCatalogoComponent } from 'src/app/pages/catalogo/index-catalogo/index-catalogo.component';
import { CreateCatalogoComponent } from 'src/app/pages/catalogo/create-catalogo/create-catalogo.component';
import { EditCatalogoComponent } from 'src/app/pages/catalogo/edit-catalogo/edit-catalogo.component';
import { AgregarCatalogoComponent } from 'src/app/pages/catalogo/agregar-catalogo/agregar-catalogo.component';
import { AgregarAseguradoraCatalogoComponent } from 'src/app/pages/catalogo/agregar-aseguradora-catalogo/agregar-aseguradora-catalogo.component';
import { EditSucursalComponent } from 'src/app/pages/catalogo/edit-sucursal/edit-sucursal.component';
import { EditAseguradoraComponent } from 'src/app/pages/catalogo/edit-aseguradora/edit-aseguradora.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'vehiculo/index', component: IndexComponent },
    { path: 'vehiculo/create', component: CreateComponent },
    { path: 'vehiculo/edit/:idVehiculo', component: EditComponent },
    { path: 'vehiculo/view/:idVehiculo', component: ViewComponent },

    { path: 'corralon/indexCorralon', component: IndexCorralonComponent },
    { path: 'corralon/createCorralon/:idVehiculo', component: CreateCorralonComponent },
    { path: 'corralon/editCorralon/:idCorralon', component: EditCorralonComponent },
    { path: 'corralon/agregarCorralon', component: AgregarCorralonComponent},

    { path: 'grua/indexGrua', component: IndexGruaComponent },
    { path: 'grua/createGrua', component: CreateGruaComponent },
    { path: 'grua/editGrua/:idGrua', component: EditGruaComponent },
    { path: 'grua/viewGrua/:idGrua', component: ViewGruaComponent },

    { path: 'chofer/indexChofer', component: IndexChoferComponent },
    { path: 'chofer/createChofer', component: CreateChoferComponent },
    { path: 'chofer/editChofer/:idChofer', component: EditChoferComponent },
    { path: 'chofer/viewChofer/:idChofer', component: ViewChoferComponent },

    { path: 'catalogo/indexCatalogo', component: IndexCatalogoComponent},
    { path: 'catalogo/createCatalogo', component: CreateCatalogoComponent},
    { path: 'catalogo/agregarCatalogo', component: AgregarCatalogoComponent},
    { path: 'catalogo/agregarAseguradoraCatalogo', component: AgregarAseguradoraCatalogoComponent},
    { path: 'catalogo/editCatalogo/:idCatalogo', component: EditCatalogoComponent},
    { path: 'catalogo/editAseguradora/:idAseguradora', component: EditAseguradoraComponent},
    { path: 'catalogo/editSucursal/:idSucursal', component: EditSucursalComponent}
];
