import { Component, OnInit } from '@angular/core';

import { GruaService } from '../grua.service';
import { Grua } from '../Grua';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index-grua',
  templateUrl: './index-grua.component.html',
  styleUrls: ['./index-grua.component.scss']
})
export class IndexGruaComponent implements OnInit {

  gruas: Grua[] = [];
  valorg: Grua;
  filterModelo = "";
  id: number;
  grua: Grua;
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
}
