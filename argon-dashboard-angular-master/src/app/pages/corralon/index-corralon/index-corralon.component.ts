import { Component, OnInit } from '@angular/core';
import { CorralonService } from '../corralon.service';
import { Corralon } from '../corralon';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-index-corralon',
  templateUrl: './index-corralon.component.html',
  styleUrls: ['./index-corralon.component.scss']
})
export class IndexCorralonComponent implements OnInit {
  corralons: Corralon[]=[];
  filterModelo = "";
  id: number;
  corralon: Corralon;
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

}
