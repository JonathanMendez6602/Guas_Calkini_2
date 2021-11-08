import { Component, OnInit } from '@angular/core';

import { ChoferService } from '../chofer.service';
import { Chofer } from '../chofer';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-index-chofer',
  templateUrl: './index-chofer.component.html',
  styleUrls: ['./index-chofer.component.scss']
})
export class IndexChoferComponent implements OnInit {

  choferes: Chofer[] = [];
  filterModelo = "";
  id: number;
  chofer: Chofer;

  // constructor() { }
  constructor(public ChoferService: ChoferService,
    public modal:NgbModal) { }

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

  openScroll(contenido, id){
    
    this.ChoferService.find(id).subscribe((data: Chofer)=>{
      this.chofer = data;
      console.log(this.chofer);
    });
    this.modal.open(contenido,{scrollable:true});
  }

}
