import { Component, OnInit } from '@angular/core';

import { VehiculoService } from '../vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vehiculo } from '../vehiculo';
import { Sucursal } from '../sucursal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  vehiculo: Vehiculo;
  form: FormGroup;
  sucursales: Sucursal[] = [];

  constructor(
    public vehiculoService: VehiculoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.vehiculoService.getAllSucursal().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      console.log(this.sucursales);
      })
    
    this.id = this.route.snapshot.params['idVehiculo'];
    this.vehiculoService.find(this.id).subscribe((data: Vehiculo)=>{
      this.vehiculo = data;
      console.log(this.vehiculo.sucursal);
      console.log(this.vehiculo.id);
    });

    this.form = new FormGroup({
      marca:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      modelo: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      foto_vehiculo: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      color:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      placas: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      inventario: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      foto_inventario:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      llaves: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      tipo_servicio: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      lugar_siniestro: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      descripcion: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      nombre: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });


  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.vehiculoService.update(this.id, this.form.value).subscribe(res => {
         console.log('vehiculo updated successfully!');
         this.router.navigateByUrl('vehiculo/index');
    })
  }

}
