import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../../services/sucursal.service';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Aseguradora, Sucursal, Vehiculo } from '../../../../shared/interfaces';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { AseguradoraService } from 'src/app/services/aseguradora.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  vehiculos: Vehiculo[] = [];
  sucursales: Sucursal[] = [];
  aseguradoras: Aseguradora[] = [];
  filterModelo = "";
  filterModelo2 = "";
  previsualizacion: string;
  previsualizacion2: string; 
  id: number;
  vehiculo: Vehiculo = {
    id: 1,
    marca: '-',
    modelo: '-',
    foto_vehiculo: '-',
    color: '-',
    placas: '-',
    inventario: '-',
    foto_inventario: '-',
    llaves: '-',
    tipo_servicio: '-',
    lugar_siniestro: '-',
    descripcion: '-',
    nombre: '-',
    sucursal: '-',
  };
  vehiculopdf: Vehiculo= {
    id: 1,
    marca: '-',
    modelo: '-',
    foto_vehiculo: '-',
    color: '-',
    placas: '-',
    inventario: '-',
    foto_inventario: '-',
    llaves: '-',
    tipo_servicio: '-',
    lugar_siniestro: '-',
    descripcion: '-',
    nombre: '-',
    sucursal: '-',
  };
  // constructor() { }
  constructor(public VehiculoService: VehiculoService,
    public sucursalService: SucursalService,
    public aseguradoraService: AseguradoraService,
    public modal:NgbModal,
    public modalPDF:NgbModal) { }

  ngOnInit(): void {
    this.VehiculoService.getAll().subscribe((data: Vehiculo[])=>{
      this.vehiculos = data;
    })

    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      console.log(this.sucursales);
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

  openScrollPDF(contenido){
    
    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      })

      this.aseguradoraService.getAll().subscribe((data: Aseguradora[])=>{
        this.aseguradoras = data;
        console.log("EXITO");
        })
    this.modalPDF.open(contenido,{scrollable:true});
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
