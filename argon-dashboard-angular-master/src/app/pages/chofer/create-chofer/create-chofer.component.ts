import { Component, OnInit } from '@angular/core';
import { ChoferService } from '../chofer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-chofer',
  templateUrl: './create-chofer.component.html',
  styleUrls: ['./create-chofer.component.css']
})
export class CreateChoferComponent implements OnInit {

  form: FormGroup;
  enviar_doc1: string="";
  enviar_doc2: string="";
  enviar_doc3: string="";
  enviar_doc4: string="";

  constructor(
    public choferService: ChoferService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {



    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellido_p: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellido_m: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      edad: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_lic_fed:  new FormControl(''),
      fecha_lic_fed: new FormControl(''),
      num_lic_fed: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_lic_est:  new FormControl(''),
      fecha_lic_est: new FormControl(''),
      num_lic_est: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_ine: new FormControl(''),
      doc_curp: new FormControl(''),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });

  }

  get f(){
    return this.form.controls;
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

  submit(){
    console.log(this.form.value);
    this.choferService.create(this.form.value).subscribe(res => {
         console.log('Chofer created successfully!');
         this.router.navigateByUrl('chofer/indexChofer');
    })
  }

}
