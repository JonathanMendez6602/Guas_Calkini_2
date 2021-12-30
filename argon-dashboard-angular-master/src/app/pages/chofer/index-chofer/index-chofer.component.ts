import { Component, OnInit } from '@angular/core';

import { ChoferService } from '../chofer.service';
import { Chofer } from '../chofer';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Router } from '@angular/router';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-index-chofer',
  templateUrl: './index-chofer.component.html',
  styleUrls: ['./index-chofer.component.scss']
})
export class IndexChoferComponent implements OnInit {

  choferes: Chofer[] = [];
  valorg: Chofer;
  filterModelo = "";
  filterModelo2 = ""; 
  id: number;
  chofer: Chofer;
  choferpdf: Chofer;

  

  // constructor() { }
  constructor(
    public ChoferService: ChoferService,
    public modal:NgbModal,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.ChoferService.getAll().subscribe((data: Chofer[])=>{
      this.choferes = data;
      console.log(this.choferes);
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
      console.log(this.chofer);
    });
    this.modal.open(contenido,{scrollable:true});
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

}
