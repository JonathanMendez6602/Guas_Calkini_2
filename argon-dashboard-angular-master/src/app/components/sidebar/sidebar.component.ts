import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Pagina Principal',  icon: 'ni-collection text-red', class: '' },
    { path: '/vehiculo/index', title: 'Servicios',  icon:'ni-delivery-fast text-red', class: '' },
    { path: '/maps', title: 'Corralon',  icon:'ni-ambulance text-red', class: '' },
    { path: '/user-profile', title: 'Nuevo Servicio',  icon:'ni-bus-front-12 text-red', class: '' },
    { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-red', class: '' },
    { path: '/register', title: 'Register',  icon:'ni-circle-08 text-red', class: '' }
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
