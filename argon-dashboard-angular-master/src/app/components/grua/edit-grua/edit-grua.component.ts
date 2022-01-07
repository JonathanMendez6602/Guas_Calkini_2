import { Component, OnInit } from '@angular/core';

import { GruaService } from '../../../services/grua.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Grua, Sucursal } from '../../../../shared/interfaces';
import { DomSanitizer } from '@angular/platform-browser';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-edit-grua',
  templateUrl: './edit-grua.component.html',
  styleUrls: ['./edit-grua.component.css']
})
export class EditGruaComponent implements OnInit {

  id: number;
  sucursales: Sucursal[] = [];
  grua: Grua={
    id: 1,
    marca: '-',
    modelo: '-',
    num_serie: 1,
    placas: '-',
    anio: 1,
    num_motor: 1,
    tipo_est_o_fed: '-',
    doc_tarjcirculacion: '-',
    doc_cartaporte: '-',
    doc_polizaseguro: '-',
    doc_factura: '-',
    doc_consecion: '-',
    doc_inclusion: '-',
    doc_permiso_fisicomec: '-',
    doc_anticontaminantes: '-',
    doc_tarjcirculacion_n: '-',
    doc_cartaporte_n: '-',
    doc_polizaseguro_n: '-',
    doc_factura_n: '-',
    doc_consecion_n: '-',
    doc_inclusion_n: '-',
    doc_permiso_fisicomec_n: '-',
    doc_anticontaminantes_n: '-',
    sucursal: '-',
  };
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
    public sucursalService: SucursalService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    
    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      })
    
    this.id = this.route.snapshot.params['idGrua'];
    this.gruaService.find(this.id).subscribe((data: Grua)=>{
      this.grua = data;
      this.enviar_doc1 = this.grua.doc_tarjcirculacion;
      this.enviar_doc2 = this.grua.doc_cartaporte;
      this.enviar_doc3 = this.grua.doc_polizaseguro;
      this.enviar_doc4 = this.grua.doc_factura;
      this.enviar_doc5 = this.grua.doc_consecion;
      this.enviar_doc6 = this.grua.doc_inclusion;
      this.enviar_doc7 = this.grua.doc_permiso_fisicomec;
      this.enviar_doc8 = this.grua.doc_anticontaminantes;
      this.enviar_doc1_n =this.grua.doc_tarjcirculacion_n;
      this.enviar_doc2_n =this.grua.doc_cartaporte_n;
      this.enviar_doc3_n =this.grua.doc_polizaseguro_n;
      this.enviar_doc4_n =this.grua.doc_factura_n;
      this.enviar_doc5_n =this.grua.doc_consecion_n;
      this.enviar_doc6_n =this.grua.doc_inclusion_n;
      this.enviar_doc7_n =this.grua.doc_permiso_fisicomec_n;
      this.enviar_doc8_n =this.grua.doc_anticontaminantes_n;
    });

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
      sucursal: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });


  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.gruaService.update(this.id, this.form.value).subscribe(res => {
         this.router.navigateByUrl('grua/indexGrua');
    })
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
        alert('Excede el tamaño permitido (1 MB)');
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

  capturarFileDoc5(event): any{
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        this.enviar_doc5_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc5 = imagen.base;
        })
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
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        this.enviar_doc6_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc6 = imagen.base;
        })
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
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        this.enviar_doc7_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc7 = imagen.base;
        })
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
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "application/pdf"){
      if(fileSize<1000000){
        this.enviar_doc8_n = archivoCapturado.name;
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.enviar_doc8 = imagen.base;
        })
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
