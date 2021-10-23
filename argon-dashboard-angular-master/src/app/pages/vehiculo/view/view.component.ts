import { Component, OnInit } from '@angular/core';

import { VehiculoService } from '../vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number;
  vehiculo: Vehiculo;
  form: FormGroup;
  constructor(
    public vehiculoService: VehiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idVehiculo'];
    this.vehiculoService.find(this.id).subscribe((data: Vehiculo)=>{
      this.vehiculo = data;
    });
  }

}
