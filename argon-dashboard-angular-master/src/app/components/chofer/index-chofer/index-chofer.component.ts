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
      console.log(this.choferes);
    })

    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      console.log(this.sucursales);
      })
  }

  deleteVehiculo(id){
    this.ChoferService.delete(id).subscribe(res => {
         this.choferes = this.choferes.filter(item => item.id !== id);
         console.log('chofer deleted successfully!');
    })
  }

  bajaChofer(id){
    this.ChoferService.getcambio(id).subscribe((data: Chofer)=>{
      this.valorg = data;
      console.log(this.valorg);
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

      console.log(this.chofer);
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
      console.log(this.chofer);
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
    var column = [];
    column.push({ text: 'A', style: 'tableHeader'});
    column.push({ text: 'B', style: 'tableHeader'});

    var value = [];
    value.push({ text: 'Asda', style: 'tableHeader'});
    value.push({ text: 'Bsa', style: 'tableHeader'});
    const pdfDefinition: any = {
      table: {
        headerRows: 1,
          body: [
            column, value
          ]
      }
    }
  }
}
