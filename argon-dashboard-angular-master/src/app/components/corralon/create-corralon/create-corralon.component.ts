import { Component, OnInit } from '@angular/core';
import { CorralonService } from '../../../services/corralon.service';
import { VehiculoService } from '../../../services/vehiculo.service';
import { CatalogoService } from '../../../services/catalogo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Vehiculo } from '../../../../shared/interfaces';
import { Catalogo } from '../../../../shared/interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create-corralon.component.html',
  styleUrls: ['./create-corralon.component.scss']
})
export class CreateCorralonComponent implements OnInit {
  form: FormGroup;
  id: number;
  vehiculo: Vehiculo;
  p: string = "Si";

  catalogos: Catalogo[] = [];

  constructor(
    public corralonService: CorralonService,
    public vehiculoService: VehiculoService,
    public catalogoService: CatalogoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.catalogoService.getAll().subscribe((data: Catalogo[])=>{
      this.catalogos = data;
      console.log(this.catalogos);
    })
    this.vehiculo= {
      id: 1,
      marca: '-',
      modelo: '-',
      foto_vehiculo: '-',
      color: '-',
      placas: '-',
      inventario: '-',
      foto_inventario: '-',
      llaves: '-',
      tipo_servicio: '-',
      lugar_siniestro: '-',
      descripcion: '-',
      nombre: '-',
      sucursal: '-',
    };
    this.id = this.route.snapshot.params['idVehiculo'];
    
    this.vehiculoService.find(this.id).subscribe((data: Vehiculo)=>{

      this.vehiculo = data;
      console.log(this.vehiculo.sucursal);
      console.log(this.vehiculo.id);
    });
    this.form = new FormGroup({
      fecha_entrada: new FormControl(''),
      pension_c: new FormControl(''),
      dias_pension: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      status_entrega: new FormControl('', [Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      fecha_entrega: new FormControl(''),
      otro_asunto: new FormControl(''),
      id_vehiculo: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      tipo_vehiculo: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
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
