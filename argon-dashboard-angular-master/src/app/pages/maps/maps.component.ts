import { Component, OnInit } from '@angular/core';
declare const google: any;

import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
 
  constructor(public vehiculoService: VehiculoService) { }


  ngOnInit(): void {
    this.vehiculoService.getAll2().subscribe((data: Vehiculo[])=>{
      this.vehiculos = data;
      console.log(this.vehiculos);
    })
  }

  deletePerson(id){
    this.vehiculoService.delete(id).subscribe(res => {
         this.vehiculos = this.vehiculos.filter(item => item.id !== id);
         console.log('Vehiculo deleted successfully!');
    })
  }
}
