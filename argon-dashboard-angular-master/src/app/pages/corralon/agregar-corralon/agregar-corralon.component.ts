import { Component, OnInit } from '@angular/core';
import { CorralonService } from '../corralon.service';
import { Corralon } from '../corralon';



@Component({
  selector: 'app-agregar-corralon',
  templateUrl: './agregar-corralon.component.html',
  styleUrls: ['./agregar-corralon.component.scss']
})
export class AgregarCorralonComponent implements OnInit {

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
         this.corralons = this.corralons.filter(item => item.id !== id);
         console.log('Corralon deleted successfully!');
    })
  }

}
