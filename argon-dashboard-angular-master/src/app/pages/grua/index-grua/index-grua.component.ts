import { Component, OnInit } from '@angular/core';

import { GruaService } from '../grua.service';
import { Grua } from '../Grua';

@Component({
  selector: 'app-index-grua',
  templateUrl: './index-grua.component.html',
  styleUrls: ['./index-grua.component.scss']
})
export class IndexGruaComponent implements OnInit {

  gruas: Grua[] = [];
  filterModelo = "";
  // constructor() { }
  constructor(public GruaService: GruaService) { }

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

}
