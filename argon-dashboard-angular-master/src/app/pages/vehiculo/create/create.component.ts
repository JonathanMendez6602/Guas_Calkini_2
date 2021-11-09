import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../vehiculo.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sucursal } from '../sucursal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  sucursales: Sucursal[] = [];
  obtenerValor;
  replytype;
  varParticular: boolean;
  varAseguradora=false;

  selectedValue:any;
  constructor(
    public vehiculoService: VehiculoService,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.varParticular=false;
    console.log(this.obtenerValor);
    this.vehiculoService.getAllSucursal().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      console.log(this.sucursales);
      console.log(this.replytype);
      })

    this.form = new FormGroup({
      marca:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      modelo: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      foto_vehiculo: new FormControl(''),
      color:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      placas: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      inventario: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      foto_inventario:  new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      llaves: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      tipo_servicio: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      lugar_siniestro: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      descripcion: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      nombre: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });
    
  }

  get f(){
    return this.form.controls;
  }

  cambioParticular(){
    this.varParticular=true;
  }

  cambioAseguradora(){
    this.varParticular=false;
  }

  submit(){
    console.log(this.form.value);
    this.vehiculoService.create(this.form.value).subscribe(res => {
         console.log('Vehiculo created successfully!');
         this.router.navigateByUrl('vehiculo/index');
    })
  }
}
