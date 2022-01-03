import { Component, OnInit } from '@angular/core';

import { CorralonService } from '../../../services/corralon.service';
import { CatalogoService } from '../../../services/catalogo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Corralon } from '../../../../shared/interfaces';
import { Catalogo } from '../../../../shared/interfaces';

@Component({
  selector: 'app-edit-corralon',
  templateUrl: './edit-corralon.component.html',
  styleUrls: ['./edit-corralon.component.scss']
})
export class EditCorralonComponent implements OnInit {
  id: number;
  tvehiculo: string;
  costos: number;
  enviar: string="carro";
  corralon: Corralon={
    id: 1,
    fecha_entrada: new Date('0000-01-01'),
    pension_c: '-',
    dias_pension: 0,
    status_entrega: '-',
    fecha_entrega: new Date('0000-01-01'),
    otro_asunto: '-',
    id_vehiculo: 1,
    tipo_vehiculo: '-',
    costo_total: 0,
    sucursal: '-',
  };
  catalogo: Catalogo;
  form: FormGroup;

  constructor(
    public corralonService: CorralonService,
    public catalogoService: CatalogoService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCorralon'];
    this.corralonService.find(this.id).subscribe((data: Corralon)=>{
      this.corralon = data;
      this.enviar = this.corralon.tipo_vehiculo;
      this.catalogoService.getValor(this.enviar).subscribe((data: Catalogo)=>{
        this.catalogo = data;
        console.log(this.catalogo);
        this.tvehiculo = this.catalogo[0].tipoVehiculo;
        this.costos = this.catalogo[0].costo;
        console.log(this.tvehiculo);
        console.log(this.costos);
      })
    })
    this.form = new FormGroup({
      fecha_entrada: new FormControl(''),
      pension_c: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      dias_pension: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      status_entrega: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      fecha_entrega: new FormControl(''),
      otro_asunto: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      id_vehiculo: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      tipo_vehiculo: new FormControl(''),
      costo_total: new FormControl(''),
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.corralonService.update(this.id, this.form.value).subscribe(res => {
      console.log('Corralon update successfully');
      this.router.navigateByUrl('corralon/indexCorralon');
    })
  }

}
