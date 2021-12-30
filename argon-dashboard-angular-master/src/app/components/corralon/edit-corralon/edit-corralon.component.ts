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
  corralon:Corralon;
  form: FormGroup;
  catalogos: Catalogo[] = [];

  constructor(
    public corralonService: CorralonService,
    public catalogoService: CatalogoService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.catalogoService.getAll().subscribe((data: Catalogo[])=>{
      this.catalogos = data;
      console.log(this.catalogos);
    })
    
    this.id = this.route.snapshot.params['idCorralon'];
    this.corralonService.find(this.id).subscribe((data: Corralon)=>{
      this.corralon = data;
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
