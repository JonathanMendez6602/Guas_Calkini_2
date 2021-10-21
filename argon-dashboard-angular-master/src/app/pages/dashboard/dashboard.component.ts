import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';

// core components


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vehiculos: Vehiculo[] = [];

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
