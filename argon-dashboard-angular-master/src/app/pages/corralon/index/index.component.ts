import { Component, OnInit } from '@angular/core';
import { CorralonService } from '../corralon.service';
import { Corralon } from '../corralon';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  corralons: Corralon[]=[];

  constructor(public corralonService: CorralonService) { }

  ngOnInit(): void {
    this.corralonService.getAll().subscribe((data: Corralon[])=>{
      this.corralons = data;
      console.log(this.corralons);
    })
  }

  deleteCorralon(id){
    this.corralonService.delete(id).subscribe(res => {
         this.corralons = this.corralons.filter(item => item.id_vehiculo !== id);
         console.log('Corralon deleted successfully!');
    })
  }


}
