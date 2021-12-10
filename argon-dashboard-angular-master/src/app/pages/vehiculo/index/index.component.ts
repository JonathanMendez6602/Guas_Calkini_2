import { Component, OnInit } from '@angular/core';

import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  filterModelo = "";
  filterModelo2 = "";
  previsualizacion: string;
  previsualizacion2: string;
  vehiculopdf: Vehiculo;
  id: number;
  vehiculo: Vehiculo;
  // constructor() { }
  constructor(public VehiculoService: VehiculoService,
    public modal:NgbModal) { }

  ngOnInit(): void {
    this.VehiculoService.getAll().subscribe((data: Vehiculo[])=>{
      this.vehiculos = data;
    })
  }

  deleteVehiculo(id){
    this.VehiculoService.delete(id).subscribe(res => {
         this.vehiculos = this.vehiculos.filter(item => item.id !== id);
         console.log('Vehiculo deleted successfully!');
    })
  }

  openScroll(contenido, id){
    
    this.VehiculoService.find(id).subscribe((data: Vehiculo)=>{
      this.vehiculo = data;
      this.previsualizacion = this.vehiculo.foto_vehiculo;
      this.previsualizacion2 = this.vehiculo.foto_inventario;
    });
    this.modal.open(contenido,{scrollable:true});
  }

  createPDF(id){
    this.VehiculoService.find(id).subscribe((data: Vehiculo)=>{
      this.vehiculopdf = data;
      console.log(this.vehiculopdf);
    });
    const pdfDefinition: any = {
      content: [
        {
          table: {
            body: [
              [
                'ID',
                'Marca',
                'Modelo',
                'Color', 
                'Placas',
                'Aseguradora-Cliente',
                'Descripcion',   
                'Sucursal',    
              ],
              [
                this.vehiculopdf.id,
                this.vehiculopdf.marca,
                this.vehiculopdf.modelo,
                this.vehiculopdf.color,
                this.vehiculopdf.placas,
                this.vehiculopdf.nombre,
                this.vehiculopdf.descripcion,
                this.vehiculopdf.sucursal,
              ]
            ]
          }
        }
      ]
    }

 
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
 
  }

}
