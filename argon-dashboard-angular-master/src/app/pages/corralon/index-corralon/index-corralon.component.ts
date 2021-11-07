import { Component, OnInit } from '@angular/core';
import { CorralonService } from '../corralon.service';
import { Corralon } from '../corralon';

@Component({
  selector: 'app-index-corralon',
  templateUrl: './index-corralon.component.html',
  styleUrls: ['./index-corralon.component.scss']
})
export class IndexCorralonComponent implements OnInit {
  corralons: Corralon[]=[];
  filterModelo = "";
  constructor(public corralonService: CorralonService) { }

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

}
