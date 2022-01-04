import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Página Principal',  icon: 'ni-collection text-yellow', class: '' },
    /*{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },*/
    { path: '/vehiculo/index', title: 'Servicios',  icon:'ni-delivery-fast text-yellow', class: '' },
    { path: '/corralon/indexCorralon', title: 'Corralón',  icon:'ni-ambulance text-yellow', class: '' },
    { path: '/grua/indexGrua', title: 'Grúas',  icon:'ni-bus-front-12 text-yellow', class: '' },
    { path: '/chofer/indexChofer', title: 'Choferes',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/catalogo/indexCatalogo', title: 'Catalogos',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
