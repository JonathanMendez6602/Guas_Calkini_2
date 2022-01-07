import { Component, OnInit } from '@angular/core';

import { CatalogoService } from 'src/app/services/catalogo.service';
import { AseguradoraService } from 'src/app/services/aseguradora.service';
import { SucursalService } from 'src/app/services/sucursal.service';

import { Catalogo } from 'src/shared/interfaces';
import { Sucursal } from 'src/shared/interfaces';
import { Aseguradora } from 'src/shared/interfaces';


@Component({
  selector: 'app-index-catalogo',
  templateUrl: './index-catalogo.component.html',
  styleUrls: ['./index-catalogo.component.scss']
})
export class IndexCatalogoComponent implements OnInit {

  catalogos: Catalogo[] = [];
  sucurasales: Sucursal[] = []; 
  aseguradoras: Aseguradora[] = [];

  filterModelo = "";
  filterModelo2 = "";
  filterModelo3 = "";

  constructor(public catalogoService: CatalogoService,
    public aseguradoraService: AseguradoraService,
    public sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.catalogoService.getAll().subscribe((data: Catalogo[])=>{
      this.catalogos = data;
    })
    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucurasales = data;
    })

    this.aseguradoraService.getAll().subscribe((data: Aseguradora[])=>{
      this.aseguradoras = data;
    })
    
  }

  deleteCatalogo(id){
    this.catalogoService.delete(id).subscribe(res => {
         this.catalogos = this.catalogos.filter(item => item.id !== id);
    })
  }

}
