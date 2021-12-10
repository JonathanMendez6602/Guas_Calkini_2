import { Component, OnInit } from '@angular/core';

import { GruaService } from '../grua.service';
import { Grua } from '../Grua';
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

  gruas: Grua[] = [];
  valorg: Grua;
  filterModelo = "";
  filterModelo2 = "";
  id: number;
  grua: Grua;
  gruapdf: Grua;
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
    });
    this.modal.open(contenido,{scrollable:true});
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
