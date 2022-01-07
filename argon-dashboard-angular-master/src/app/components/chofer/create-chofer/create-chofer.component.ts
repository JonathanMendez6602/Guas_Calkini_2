import { Component, OnInit } from '@angular/core';
import { ChoferService } from '../../../services/chofer.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Sucursal } from 'src/shared/interfaces';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-create-chofer',
  templateUrl: './create-chofer.component.html',
  styleUrls: ['./create-chofer.component.css']
})
export class CreateChoferComponent implements OnInit {

  form: FormGroup;
  sucursales: Sucursal[] = [];
  enviar_doc1: string="";
  enviar_doc2: string="";
  enviar_doc3: string="";
  enviar_doc4: string="";
  enviar_doc1_n: string="";
  enviar_doc2_n: string="";
  enviar_doc3_n: string="";
  enviar_doc4_n: string="";

  constructor(
    public choferService: ChoferService,
    public sucursalService: SucursalService,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      })

    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellido_p: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellido_m: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      edad: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_lic_fed:  new FormControl(''),
      doc_lic_fed_n:  new FormControl(''),
      fecha_lic_fed: new FormControl(''),
      num_lic_fed: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_lic_est_n:  new FormControl(''),
      doc_lic_est:  new FormControl(''),
      fecha_lic_est: new FormControl(''),
      num_lic_est: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_ine_n: new FormControl(''),
      doc_ine: new FormControl(''),
      doc_curp_n: new FormControl(''),
      doc_curp: new FormControl(''),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });

  }

  get f(){
    return this.form.controls;
  }

  capturarFileDoc1(event): any{
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        this.enviar_doc1_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc1 = imagen.base;
        })
      }else{
        this.enviar_doc1 = "";
        this.enviar_doc1_n = "";
        alert('Excede el tamaño permitido (1 MB) ¡Reducelo!');
      } 
    }else{
      this.enviar_doc1 = "";
      this.enviar_doc1_n = "";
      alert('Tipo de archivo no permitido  (PDF)');
    }
  }

  capturarFileDoc2(event): any{
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        this.enviar_doc2_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc2 = imagen.base;
        })
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
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        this.enviar_doc3_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc3 = imagen.base;
        })
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
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        this.enviar_doc4_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc4 = imagen.base;
        })
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

  submit(){
    this.choferService.create(this.form.value).subscribe(res => {
         this.router.navigateByUrl('chofer/indexChofer');
    })
  }

}
