import { Component, OnInit } from '@angular/core';

import { ChoferService } from '../../../services/chofer.service';
import { Chofer, Sucursal } from '../../../../shared/interfaces';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Router } from '@angular/router';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { SucursalService } from 'src/app/services/sucursal.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-index-chofer',
  templateUrl: './index-chofer.component.html',
  styleUrls: ['./index-chofer.component.scss']
})
export class IndexChoferComponent implements OnInit {

  choferes: Chofer[] = [];
  sucursales: Sucursal[] = [];
  previsualizacion: string;
  previsualizacion2: string; 
  previsualizacion3: string;
  previsualizacion4: string;
  valorg: Chofer={
    id: 1,
    nombre: '-',
    apellido_m: '-',
    apellido_p: '-',
    edad: 1,
    doc_lic_fed_n: '-',
    doc_lic_fed: '-',
    fecha_lic_fed: new Date('0000-01-01'),
    num_lic_fed: 1,
    doc_lic_est_n: '-',
    doc_lic_est: '-',
    fecha_lic_est: new Date('0000-01-01'),
    num_lic_est: 1,
    doc_ine_n: '-',
    doc_ine: '-',
    doc_curp_n: '-',
    doc_curp: '-',
    sucursal: '-',
    estado: '-',
  };
  filterModelo = "";
  filterModelo2 = ""; 
  id: number;
  chofer: Chofer={
    id: 1,
    nombre: '-',
    apellido_m: '-',
    apellido_p: '-',
    edad: 1,
    doc_lic_fed_n: '-',
    doc_lic_fed: '-',
    fecha_lic_fed: new Date('0000-01-01'),
    num_lic_fed: 1,
    doc_lic_est_n: '-',
    doc_lic_est: '-',
    fecha_lic_est: new Date('0000-01-01'),
    num_lic_est: 1,
    doc_ine_n: '-',
    doc_ine: '-',
    doc_curp_n: '-',
    doc_curp: '-',
    sucursal: '-',
    estado: '-',
  };
  choferpdf: Chofer={
    id: 1,
    nombre: '-',
    apellido_m: '-',
    apellido_p: '-',
    edad: 1,
    doc_lic_fed_n: '-',
    doc_lic_fed: '-',
    fecha_lic_fed: new Date('0000-01-01'),
    num_lic_fed: 1,
    doc_lic_est_n: '-',
    doc_lic_est: '-',
    fecha_lic_est: new Date('0000-01-01'),
    num_lic_est: 1,
    doc_ine_n: '-',
    doc_ine: '-',
    doc_curp_n: '-',
    doc_curp: '-',
    sucursal: '-',
    estado: '-',
  };

  

  // constructor() { }
  constructor(
    public ChoferService: ChoferService,
    public sucursalService: SucursalService,
    public modal:NgbModal,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.ChoferService.getAll().subscribe((data: Chofer[])=>{
      this.choferes = data;
    })

    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      })
  }

  deleteVehiculo(id){
    this.ChoferService.delete(id).subscribe(res => {
         this.choferes = this.choferes.filter(item => item.id !== id);
    })
  }

  bajaChofer(id){
    this.ChoferService.getcambio(id).subscribe((data: Chofer)=>{
      this.valorg = data;
    });
    this.router.navigateByUrl('chofer/indexChofer');
  }

  openScroll(contenido, id){
    
    this.ChoferService.find(id).subscribe((data: Chofer)=>{
      this.chofer = data;
      this.previsualizacion= this.chofer.doc_lic_fed;
      this.previsualizacion2= this.chofer.doc_lic_est;
      this.previsualizacion3= this.chofer.doc_ine;
      this.previsualizacion4= this.chofer.doc_curp;
    });
    this.modal.open(contenido,{scrollable:true});
  }


  createPDFLicFed(){
    // The Base64 string of a simple PDF file
    var val = this.chofer.doc_lic_fed.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }

  createPDFLicEst(){
    // The Base64 string of a simple PDF file
    var val = this.chofer.doc_lic_est.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }

  createPDFINE(){
    // The Base64 string of a simple PDF file
    var val = this.chofer.doc_ine.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }

  createPDFCURP(){
    // The Base64 string of a simple PDF file
    var val = this.chofer.doc_curp.split(',');
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    let pdfWindow = window.open("")
    pdfWindow.document.write(
    "<iframe title='Hola' download='hola.pdf' width='100%' height='100%' src='data:application/pdf;base64, " +
    encodeURI(val[1]) + "'></iframe>"
    )
  }

  createPDF(id){
    this.ChoferService.find(id).subscribe((data: Chofer)=>{
      this.choferpdf = data;
    });
    const pdfDefinition: any = {
      content: [
        {
          table: {
            body: [
              [
                'ID',
                'Nombre',
                'Apellido_p',
                'Apellido_m', 
                'Edad',
                'Sucursal',
                'Estado',       
              ],
              [
                this.choferpdf.id,
                this.choferpdf.nombre,
                this.choferpdf.apellido_p,
                this.choferpdf.apellido_m,
                this.choferpdf.edad,
                this.choferpdf.sucursal,
                this.choferpdf.estado,
              ]
            ]
          }
        }
      ]
    }

 
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
 
  }

  createReporte(){
    pdfMake.tableLayouts = {
      exampleLayout: {
        hLineWidth: function (i, node) {
          if (i === 0 || i === node.table.body.length) {
            return 0;
          }
          return (i === node.table.headerRows) ? 2 : 1;
        },
        vLineWidth: function (i) {
          return 0;
        },
        hLineColor: function (i) {
          return i === 1 ? 'black' : '#aaa';
        },
        paddingLeft: function (i) {
          return i === 0 ? 0 : 8;
        },
        paddingRight: function (i, node) {
          return (i === node.table.widths.length - 1) ? 0 : 8;
        }
      }
    };
    var docDefinition = {
      content: [
        {
          layout: 'lightHorizontalLines', // optional
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 2,
            widths: [ '*', 'auto', 100, '*' ],
    
            body: [
              [ 'First', 'Second', 'Third', 'The last one' ],
              [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
              [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
            ]
          }
        }
      ]
    };
    const pdf = pdfMake.createPdf(docDefinition);
    pdf.open();
    // download the PDF
    pdfMake.createPdf(docDefinition).download();
  }
}
