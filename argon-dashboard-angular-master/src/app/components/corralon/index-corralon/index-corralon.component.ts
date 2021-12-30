import { Component, OnInit } from '@angular/core';
import { CorralonService } from '../../../services/corralon.service';
import { Corralon } from '../../../../shared/interfaces';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-index-corralon',
  templateUrl: './index-corralon.component.html',
  styleUrls: ['./index-corralon.component.scss']
})
export class IndexCorralonComponent implements OnInit {
  corralons: Corralon[]=[];
  filterModelo = "";
  filterModelo2 = "";
  id: number;
  corralon: Corralon={
    id: 1,
    fecha_entrada: new Date('0000-01-01'),
    pension_c: '-',
    dias_pension: 0,
    status_entrega: '-',
    fecha_entrega: new Date('0000-01-01'),
    otro_asunto: '-',
    id_vehiculo: 1,
    tipo_vehiculo: '-',
    costo_total: 0,
    sucursal: '-',
  };
  corralonpdf: Corralon={
    id: 1,
    fecha_entrada: new Date('0000-01-01'),
    pension_c: '-',
    dias_pension: 0,
    status_entrega: '-',
    fecha_entrega: new Date('0000-01-01'),
    otro_asunto: '-',
    id_vehiculo: 1,
    tipo_vehiculo: '-',
    costo_total: 0,
    sucursal: '-',
  };
  constructor(public corralonService: CorralonService,
    public modal:NgbModal) { }

  ngOnInit(): void {
    this.corralonService.getAll().subscribe((data: Corralon[])=>{
      this.corralons = data;
      console.log(this.corralons);
    })
  }

  deleteCorralon(id){
    this.corralonService.delete(id).subscribe(res => {
         this.corralons = this.corralons.filter(item => item.id !== id);
         console.log('Corralon deleted successfully!');
    })
  }

  openScroll(contenido, id){
    
    this.corralonService.find(id).subscribe((data: Corralon)=>{
      this.corralon = data;
      console.log(this.corralon);
    });
    this.modal.open(contenido,{scrollable:true});
  }

  createPDF(id){
    this.corralonService.find(id).subscribe((data: Corralon)=>{
      this.corralonpdf = data;
      console.log(this.corralonpdf);
    });
    const pdfDefinition: any = {
      content: [
        {
          table: {
            body: [
              [
                'ID',
                'Dias de Pension',
                'Fecha de Entrada',
                'Fecha de Entrega', 
                'ID del Vehiculo',
                'Pension Corralon',
                'Status de la entrega',
                'Sucursal',
                'Otro Asunto',       
              ],
              [
                this.corralonpdf.id,
                this.corralonpdf.dias_pension,
                this.corralonpdf.fecha_entrada,
                this.corralonpdf.fecha_entrega,
                this.corralonpdf.id_vehiculo,
                this.corralonpdf.pension_c,
                this.corralonpdf.status_entrega,
                this.corralonpdf.sucursal,
                this.corralonpdf.otro_asunto,
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
