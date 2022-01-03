import { Component, OnInit } from '@angular/core';

import { GruaService } from '../../../services/grua.service';
import { Grua } from '../../../../shared/interfaces';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Router } from '@angular/router';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-index-grua',
  templateUrl: './index-grua.component.html',
  styleUrls: ['./index-grua.component.scss']
})
export class IndexGruaComponent implements OnInit {

  previsualizacion: string;
  previsualizacion2: string; 
  previsualizacion3: string;
  previsualizacion4: string;
  previsualizacion5: string;
  previsualizacion6: string; 
  previsualizacion7: string;
  previsualizacion8: string;

  gruas: Grua[] = [];
  valorg: Grua;
  filterModelo = "";
  filterModelo2 = "";
  id: number;
  grua: Grua={
    id: 1,
    marca: '-',
    modelo: '-',
    num_serie: 1,
    placas: '-',
    anio: 1,
    num_motor: 1,
    tipo_est_o_fed: '-',
    doc_tarjcirculacion: '-',
    doc_cartaporte: '-',
    doc_polizaseguro: '-',
    doc_factura: '-',
    doc_consecion: '-',
    doc_inclusion: '-',
    doc_permiso_fisicomec: '-',
    doc_anticontaminantes: '-',
    doc_tarjcirculacion_n: '-',
    doc_cartaporte_n: '-',
    doc_polizaseguro_n: '-',
    doc_factura_n: '-',
    doc_consecion_n: '-',
    doc_inclusion_n: '-',
    doc_permiso_fisicomec_n: '-',
    doc_anticontaminantes_n: '-',
    sucursal: '-',
  };
  gruapdf: Grua={
    id: 1,
    marca: '-',
    modelo: '-',
    num_serie: 1,
    placas: '-',
    anio: 1,
    num_motor: 1,
    tipo_est_o_fed: '-',
    doc_tarjcirculacion: '-',
    doc_cartaporte: '-',
    doc_polizaseguro: '-',
    doc_factura: '-',
    doc_consecion: '-',
    doc_inclusion: '-',
    doc_permiso_fisicomec: '-',
    doc_anticontaminantes: '-',
    doc_tarjcirculacion_n: '-',
    doc_cartaporte_n: '-',
    doc_polizaseguro_n: '-',
    doc_factura_n: '-',
    doc_consecion_n: '-',
    doc_inclusion_n: '-',
    doc_permiso_fisicomec_n: '-',
    doc_anticontaminantes_n: '-',
    sucursal: '-',
  };
  // constructor() { }
  constructor(
    public GruaService: GruaService,
    public modal:NgbModal,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.GruaService.getAll().subscribe((data: Grua[])=>{
      this.gruas = data;
      console.log(this.gruas);
    })
  }

  deleteVehiculo(id){
    this.GruaService.delete(id).subscribe(res => {
         this.gruas = this.gruas.filter(item => item.id !== id);
         console.log('grua deleted successfully!');
    })
  }

  bajaGrua(id){
    this.GruaService.getcambio(id).subscribe((data: Grua)=>{
      this.valorg = data;
      console.log(this.valorg);
    });
    this.router.navigateByUrl('grua/indexGrua');
  }

  openScroll(contenido, id){
    
    this.GruaService.find(id).subscribe((data: Grua)=>{
      this.grua = data;
      console.log(this.grua);
      this.previsualizacion=this.grua.doc_tarjcirculacion;
      this.previsualizacion2=this.grua.doc_cartaporte;
      this.previsualizacion3=this.grua.doc_polizaseguro;
      this.previsualizacion4=this.grua.doc_factura;
      this.previsualizacion5=this.grua.doc_consecion;
      this.previsualizacion6=this.grua.doc_inclusion;
      this.previsualizacion7=this.grua.doc_permiso_fisicomec;
      this.previsualizacion8=this.grua.doc_anticontaminantes
    });
    this.modal.open(contenido,{scrollable:true});
  }
  createPDFArc1(){
    // The Base64 string of a simple PDF file
    var val = this.grua.doc_tarjcirculacion.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }
  createPDFArc2(){
    // The Base64 string of a simple PDF file
    var val = this.grua.doc_cartaporte.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }
  createPDFArc3(){
    // The Base64 string of a simple PDF file
    var val = this.grua.doc_polizaseguro.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }
  createPDFArc4(){
    // The Base64 string of a simple PDF file
    var val = this.grua.doc_factura.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }
  createPDFArc5(){
    // The Base64 string of a simple PDF file
    var val = this.grua.doc_consecion.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }
  createPDFArc6(){
    // The Base64 string of a simple PDF file
    var val = this.grua.doc_inclusion.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }
  createPDFArc7(){
    // The Base64 string of a simple PDF file
    var val = this.grua.doc_permiso_fisicomec.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }
  createPDFArc8(){
    // The Base64 string of a simple PDF file
    var val = this.grua.doc_anticontaminantes.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }

  createPDF(id){
    this.GruaService.find(id).subscribe((data: Grua)=>{
      this.gruapdf = data;
      console.log(this.gruapdf);
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
                'Numero de Motor', 
                'Numero de Serie',
                'Placas',
                'tipo Estatal o Federal',
                'Año',
                'Sucursal',       
              ],
              [
                this.gruapdf.id,
                this.gruapdf.marca,
                this.gruapdf.modelo,
                this.gruapdf.num_motor,
                this.gruapdf.num_serie,
                this.gruapdf.placas,
                this.gruapdf.tipo_est_o_fed,
                this.gruapdf.anio,
                this.gruapdf.sucursal,
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
