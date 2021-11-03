import { Component, OnInit } from '@angular/core';

import { GruaService } from '../grua.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Grua } from '../grua';

@Component({
  selector: 'app-edit-grua',
  templateUrl: './edit-grua.component.html',
  styleUrls: ['./edit-grua.component.css']
})
export class EditGruaComponent implements OnInit {

  id: number;
  grua: Grua;
  form: FormGroup;

  constructor(
    public gruaService: GruaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    
    this.id = this.route.snapshot.params['idGrua'];
    this.gruaService.find(this.id).subscribe((data: Grua)=>{
      this.grua = data;
      console.log(this.grua.id);
    });

    this.form = new FormGroup({
      marca:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      modelo: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      num_serie: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      placas:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      anio: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      num_motor: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      tipo_est_o_fed:  new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_tarjcirculacion: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_cartaporte: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_polizaseguro: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_factura: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_consecion: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_inclusion: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_permiso_fisicomec: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_anticontaminantes: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });


  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.gruaService.update(this.id, this.form.value).subscribe(res => {
         console.log('vehiculo updated successfully!');
         this.router.navigateByUrl('grua/indexGrua');
    })
  }

}
