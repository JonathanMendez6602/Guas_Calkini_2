import { Component, OnInit } from '@angular/core';
import { CorralonService } from '../corralon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-create',
  templateUrl: './create-corralon.component.html',
  styleUrls: ['./create-corralon.component.scss']
})
export class CreateCorralonComponent implements OnInit {
  form: FormGroup;
  id: number;
  vehiculo: Vehiculo;

  constructor(
    public corralonService: CorralonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idVehiculo'];
    
    this.corralonService.findID(this.id).subscribe((data: Vehiculo)=>{

      this.vehiculo = data;
      console.log(this.vehiculo.sucursal);
      console.log(this.vehiculo.id);
    });
    this.form = new FormGroup({
      fecha_entrada: new FormControl(''),
      pension_c: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      dias_pension: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      status_entrega: new FormControl('', [Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      fecha_entrega: new FormControl(''),
      otro_asunto: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      id_vehiculo: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });
  }

  
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.corralonService.create(this.form.value).subscribe(res => {
         console.log('Corralon created successfully!');
         this.router.navigateByUrl('corralon/indexCorralon');
    })
  }

}
