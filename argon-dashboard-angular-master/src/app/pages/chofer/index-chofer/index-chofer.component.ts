import { Component, OnInit } from '@angular/core';

import { ChoferService } from '../chofer.service';
import { Chofer } from '../chofer';

@Component({
  selector: 'app-index-chofer',
  templateUrl: './index-chofer.component.html',
  styleUrls: ['./index-chofer.component.css']
})
export class IndexChoferComponent implements OnInit {

  chofer: Chofer[] = [];

  // constructor() { }
  constructor(public ChoferService: ChoferService) { }

  ngOnInit(): void {
    this.ChoferService.getAll().subscribe((data: Chofer[])=>{
      this.chofer = data;
      console.log(this.chofer);
    })
  }

  deleteVehiculo(id){
    this.ChoferService.delete(id).subscribe(res => {
         this.chofer = this.chofer.filter(item => item.id !== id);
         console.log('chofer deleted successfully!');
    })
  }

}
