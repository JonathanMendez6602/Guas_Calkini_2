import { Component, OnInit } from '@angular/core';

import { CatalogoService } from '../catalogo.service';
import { Catalogo } from '../catalogo';
import { Sucursal } from '../sucursal';
import { Aseguradora } from '../aseguradora';

@Component({
  selector: 'app-index-catalogo',
  templateUrl: './index-catalogo.component.html',
  styleUrls: ['./index-catalogo.component.scss']
})
export class IndexCatalogoComponent implements OnInit {

  catalogos: Catalogo[] = [];
  sucurasales: Sucursal[] = []; 
  aseguradoras: Aseguradora[] = [];

  constructor(public catalogoService: CatalogoService) { }

  ngOnInit(): void {
    this.catalogoService.getAll().subscribe((data: Catalogo[])=>{
      this.catalogos = data;
      console.log(this.catalogos);
    })
    this.catalogoService.getAllSucursales().subscribe((data: Sucursal[])=>{
      this.sucurasales = data;
      console.log(this.sucurasales);
    })

    this.catalogoService.getAllAseguradoras().subscribe((data: Aseguradora[])=>{
      this.aseguradoras = data;
      console.log(this.aseguradoras);
    })
    
  }

  deleteCatalogo(id){
    this.catalogoService.delete(id).subscribe(res => {
         this.catalogos = this.catalogos.filter(item => item.id !== id);
         console.log('catalogos deleted successfully!');
    })
  }

}
