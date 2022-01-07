import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Página Principal',  icon: 'fas fa-table text-yellow', class: '' },
    { path: '/vehiculo/index', title: 'Servicios',  icon:'fas fa-car text-yellow', class: '' },
    { path: '/corralon/indexCorralon', title: 'Corralón',  icon:'fas fa-car-crash text-yellow', class: '' },
    { path: '/grua/indexGrua', title: 'Grúas',  icon:'fas fa-truck text-yellow', class: '' },
    { path: '/chofer/indexChofer', title: 'Choferes',  icon:'fas fa-users text-yellow', class: '' },
    { path: '/catalogo/indexCatalogo', title: 'Catálogos',  icon:'fas fa-bars text-yellow', class: '' }
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
