import { Component, OnInit } from '@angular/core';
import { GruaService } from '../../../services/grua.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-create-grua',
  templateUrl: './create-grua.component.html',
  styleUrls: ['./create-grua.component.css']
})
export class CreateGruaComponent implements OnInit {

  form: FormGroup;
  enviar_doc1: string="";
  enviar_doc2: string="";
  enviar_doc3: string="";
  enviar_doc4: string="";
  enviar_doc5: string="";
  enviar_doc6: string="";
  enviar_doc7: string="";
  enviar_doc8: string="";
  enviar_doc1_n: string="";
  enviar_doc2_n: string="";
  enviar_doc3_n: string="";
  enviar_doc4_n: string="";
  enviar_doc5_n: string="";
  enviar_doc6_n: string="";
  enviar_doc7_n: string="";
  enviar_doc8_n: string="";

  constructor(
    public gruaService: GruaService,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer
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
      doc_tarjcirculacion_n: new FormControl(''),
      doc_cartaporte_n: new FormControl(''),
      doc_polizaseguro_n: new FormControl(''),
      doc_factura_n: new FormControl(''),
      doc_consecion_n: new FormControl(''),
      doc_inclusion_n: new FormControl(''),
      doc_permiso_fisicomec_n: new FormControl(''),
      doc_anticontaminantes_n: new FormControl(''),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });

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

  capturarFileDoc1(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.enviar_doc1_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc1 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      }else{
        this.enviar_doc1 = "";
        this.enviar_doc1_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_doc1 = "";
      this.enviar_doc1_n = "";
      alert('Tipo de archivo no permitido  (PDF)');
    }
  }

  capturarFileDoc2(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.enviar_doc2_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc2 = imagen.base;
          console.log(imagen.base);
        })
        console.log(event.target.files);
      }else{
        this.enviar_doc2 = "";
        this.enviar_doc2_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_doc2 = "";
      this.enviar_doc2_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }
  
  capturarFileDoc3(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.enviar_doc3_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc3 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      }else{
        this.enviar_doc3 = "";
        this.enviar_doc3_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_doc3 = "";
      this.enviar_doc3_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc4(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.enviar_doc4_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc4 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      }else{
        this.enviar_doc4 = "";
        this.enviar_doc4_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_doc4 = "";
      this.enviar_doc4_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc5(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.enviar_doc5_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc5 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      }else{
        this.enviar_doc5 = "";
        this.enviar_doc5_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_doc5 = "";
      this.enviar_doc5_n = "";
      alert('Tipo de archivo no permitido  (PDF)');
    }
  }

  capturarFileDoc6(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.enviar_doc6_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc6 = imagen.base;
          console.log(imagen.base);
        })
        console.log(event.target.files);
      }else{
        this.enviar_doc6 = "";
        this.enviar_doc6_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_doc6 = "";
      this.enviar_doc6_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }
  
  capturarFileDoc7(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.enviar_doc7_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc7 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      }else{
        this.enviar_doc7 = "";
        this.enviar_doc7_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_doc7 = "";
      this.enviar_doc7_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileDoc8(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.enviar_doc8_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc8 = imagen.base;
          console.log(imagen);
        })
        console.log(event.target.files);
      }else{
        this.enviar_doc8 = "";
        this.enviar_doc8_n = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_doc8 = "";
      this.enviar_doc8_n = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try{
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch(e){
      return null;
    }
  })

}
