import { Component, OnInit } from '@angular/core';

import { GruaService } from '../grua.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Grua } from '../grua';

@Component({
  selector: 'app-view-grua',
  templateUrl: './view-grua.component.html',
  styleUrls: ['./view-grua.component.css']
})
export class ViewGruaComponent implements OnInit {

  id: number;
  grua: Grua;
  constructor(
    public gruaService: GruaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idGrua'];
    this.gruaService.find(this.id).subscribe((data: Grua)=>{
      this.grua = data;
      console.log(this.grua);
    });
  }

}
