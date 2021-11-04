import { Component, OnInit } from '@angular/core';

import { ChoferService } from '../chofer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Chofer } from '../chofer';

@Component({
  selector: 'app-view-chofer',
  templateUrl: './view-chofer.component.html',
  styleUrls: ['./view-chofer.component.css']
})
export class ViewChoferComponent implements OnInit {

  id: number;
  chofer: Chofer;
  constructor(
    public choferService: ChoferService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idChofer'];
    this.choferService.find(this.id).subscribe((data: Chofer)=>{
      this.chofer = data;
      console.log(this.chofer);
    });
  }

}
