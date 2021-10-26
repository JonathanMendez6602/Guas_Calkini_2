import { Component, OnInit } from '@angular/core';
import { CorralonService } from '../corralon.service';
import { Corralon } from '../corralon';
import { Vehiculo } from '../vehiculo';


@Component({
  selector: 'app-agregar-corralon',
  templateUrl: './agregar-corralon.component.html',
  styleUrls: ['./agregar-corralon.component.scss']
})
export class AgregarCorralonComponent implements OnInit {

  corralons: Corralon[]=[];
  vehiculos: Vehiculo[] = [];
  constructor(public corralonService: CorralonService) { }

  ngOnInit(): void {
    this.corralonService.getAllMostrar().subscribe((data: Vehiculo[])=>{
      this.vehiculos = data;
      console.log(this.vehiculos);
    })
  }

  deleteCorralon(id){
    this.corralonService.delete(id).subscribe(res => {
         this.corralons = this.corralons.filter(item => item.id !== id);
         console.log('Corralon deleted successfully!');
    })
  }

}
