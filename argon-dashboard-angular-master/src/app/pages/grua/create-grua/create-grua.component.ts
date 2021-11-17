import { Component, OnInit } from '@angular/core';
import { GruaService } from '../grua.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-grua',
  templateUrl: './create-grua.component.html',
  styleUrls: ['./create-grua.component.css']
})
export class CreateGruaComponent implements OnInit {

  form: FormGroup;
  enviar_doc1: string;
  enviar_doc2: string;
  enviar_doc3: string;
  enviar_doc4: string;
  enviar_doc5: string;
  enviar_doc6: string;
  enviar_doc7: string;
  enviar_doc8: string;

  constructor(
    public gruaService: GruaService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {



    this.form = new FormGroup({
      marca:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      modelo: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      num_serie: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      placas:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      anio: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      num_motor: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      tipo_est_o_fed:  new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_tarjcirculacion: new FormControl(''),
      doc_cartaporte: new FormControl(''),
      doc_polizaseguro: new FormControl(''),
      doc_factura: new FormControl(''),
      doc_consecion: new FormControl(''),
      doc_inclusion: new FormControl(''),
      doc_permiso_fisicomec: new FormControl(''),
      doc_anticontaminantes: new FormControl(''),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });

  }

  capturarFileDoc1(event): any{
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.enviar_doc1 = archivoCapturado.name;
    console.log(this.enviar_doc1);
    console.log(event.target.files);
  }

  capturarFileDoc2(event): any{
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.enviar_doc2 = archivoCapturado.name;
    console.log(this.enviar_doc2);
    console.log(event.target.files);
  }

  capturarFileDoc3(event): any{
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.enviar_doc3 = archivoCapturado.name;
    console.log(this.enviar_doc3);
    console.log(event.target.files);
  }

  capturarFileDoc4(event): any{
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.enviar_doc4 = archivoCapturado.name;
    console.log(this.enviar_doc4);
    console.log(event.target.files);
  }

  capturarFileDoc5(event): any{
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.enviar_doc5 = archivoCapturado.name;
    console.log(this.enviar_doc5);
    console.log(event.target.files);
  }

  capturarFileDoc6(event): any{
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.enviar_doc6 = archivoCapturado.name;
    console.log(this.enviar_doc6);
    console.log(event.target.files);
  }

  capturarFileDoc7(event): any{
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.enviar_doc7 = archivoCapturado.name;
    console.log(this.enviar_doc7);
    console.log(event.target.files);
  }

  capturarFileDoc8(event): any{
    console.log(event);
    const archivoCapturado = event.target.files[0];
    this.enviar_doc8 = archivoCapturado.name;
    console.log(this.enviar_doc8);
    console.log(event.target.files);
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.gruaService.create(this.form.value).subscribe(res => {
         console.log('Grua created successfully!');
         this.router.navigateByUrl('grua/indexGrua');
    })
  }

}
