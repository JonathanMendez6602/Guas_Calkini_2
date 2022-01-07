import { Component, VERSION, OnInit } from '@angular/core';
import { CorralonService } from '../../../services/corralon.service';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Corralon } from '../../../../shared/interfaces';
import { Vehiculo } from '../../../../shared/interfaces';


@Component({
  selector: 'app-agregar-corralon',
  templateUrl: './agregar-corralon.component.html',
  styleUrls: ['./agregar-corralon.component.scss']
})
export class AgregarCorralonComponent implements OnInit {

  corralons: Corralon[]=[];
  vehiculos: Vehiculo[] = [];
  filterModelo = "";
  constructor
  (
    public corralonService: CorralonService,
    public vehiculoService: VehiculoService,
  ) { }

  ngOnInit(): void {
    this.vehiculoService.getAllMostrar().subscribe((data: Vehiculo[])=>{
      this.vehiculos = data;
    })
  }

  deleteCorralon(id){
    this.corralonService.delete(id).subscribe(res => {
         this.corralons = this.corralons.filter(item => item.id !== id);
    })
  }
    
}
