import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../../services/sucursal.service';
import { VehiculoService } from '../../../services/vehiculo.service';
import { Aseguradora, Sucursal, Vehiculo } from '../../../../shared/interfaces';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  buildTableBody: any;
  vehiculos: Vehiculo[] = [];
  vehiculosp: Vehiculo[] = [];
  form: FormGroup;
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
      });
      console.log("Sucursal");
      this.aseguradoraService.getAll().subscribe((data: Aseguradora[])=>{
        this.aseguradoras = data;
        console.log("Aseguradora");
        });
        console.log("Form1");
        this.form = new FormGroup({
          nombre: new FormControl(''),
          sucursal: new FormControl(''),
        });
        console.log("Form2");
    this.modalPDF.open(contenido,{scrollable:true});
  }


  table(data, columns) {
    console.log("creando tabla 2");
    return {
      table: {
        headerRows: 1,
        body: this.buildTableBody(data, columns)
      }
    };
  }

generateRows(){
  this.VehiculoService.getAll().subscribe((data: Vehiculo[])=>{
    this.vehiculos = data;
    console.log(this.vehiculos);
  });
var tempObj = {}
var titulos = new Array( 'ID', 'Modelo', 'Marca', 'Color', 'Placas' );
var tempArr = new Array();
var bodys = [];
bodys.push(titulos);
for(var i=0; i<this.vehiculos.length; i++){
  tempArr.push(this.vehiculos[i].id);
  tempArr.push(this.vehiculos[i].modelo);
  tempArr.push(this.vehiculos[i].marca);
  tempArr.push(this.vehiculos[i].color);
  tempArr.push(this.vehiculos[i].placas);    
  bodys.push(tempArr);
  }
  console.log( bodys );
  const docDefinition: any = {
    content: [
    {
      headerRows: 1,
      widths: [ '*', 'auto', 100, '*' ],
      table: {
        body: bodys
      }
    }]
  }
pdfMake.createPdf(docDefinition).open();
//pdfMake.createPdf(docDefinition).download();
}

  createPDF(id){
    var ruta="../../../../assets/img/brand/logo.png";
    this.VehiculoService.find(id).subscribe((data: Vehiculo)=>{
      this.vehiculopdf = data;
    });
    const pdfDefinition: any = {
      content: [
        {
          text: 'PDF Generated with Image from external URL',
          fontSize : 20
        },
        {
          image: 'ruta'
        },    
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
