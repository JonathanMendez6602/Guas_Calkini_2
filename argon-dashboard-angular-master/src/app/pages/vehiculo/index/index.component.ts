import { Component, OnInit } from '@angular/core';

import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  filterModelo = "";
  // constructor() { }
  constructor(public VehiculoService: VehiculoService) { }

  ngOnInit(): void {
    this.VehiculoService.getAll().subscribe((data: Vehiculo[])=>{
      this.vehiculos = data;
      console.log(this.vehiculos);
    })
  }

  deleteVehiculo(id){
    this.VehiculoService.delete(id).subscribe(res => {
         this.vehiculos = this.vehiculos.filter(item => item.id !== id);
         console.log('Vehiculo deleted successfully!');
    })
  }

}
