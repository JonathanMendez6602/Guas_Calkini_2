import { Component, OnInit } from '@angular/core';

import { ChoferService } from '../../../services/chofer.service';
import { Chofer, Sucursal } from '../../../../shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { SucursalService } from 'src/app/services/sucursal.service';

@Component({
  selector: 'app-edit-chofer',
  templateUrl: './edit-chofer.component.html',
  styleUrls: ['./edit-chofer.component.css']
})
export class EditChoferComponent implements OnInit {

  id: number;
  sucursales: Sucursal[] = [];
  chofer: Chofer={
    id: 1,
    nombre: '-',
    apellido_m: '-',
    apellido_p: '-',
    edad: 1,
    doc_lic_fed_n: '-',
    doc_lic_fed: '-',
    fecha_lic_fed: new Date('0000-01-01'),
    num_lic_fed: 1,
    doc_lic_est_n: '-',
    doc_lic_est: '-',
    fecha_lic_est: new Date('0000-01-01'),
    num_lic_est: 1,
    doc_ine_n: '-',
    doc_ine: '-',
    doc_curp_n: '-',
    doc_curp: '-',
    sucursal: '-',
    estado: '-',
  };
  form: FormGroup;

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
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    
    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      })
      
    this.id = this.route.snapshot.params['idChofer'];
    this.choferService.find(this.id).subscribe((data: Chofer)=>{
      this.chofer = data;
      this.enviar_doc1 = this.chofer.doc_lic_fed;
      this.enviar_doc2 = this.chofer.doc_lic_est;
      this.enviar_doc3 = this.chofer.doc_ine;
      this.enviar_doc4 = this.chofer.doc_curp;
    });

    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ]),
      apellido_p: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ]),
      apellido_m: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ]),
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
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ])
    });


  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.choferService.update(this.id, this.form.value).subscribe(res => {
         this.router.navigateByUrl('chofer/indexChofer');
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
        alert('Excede el tama??o permitido (1 MB)');
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
        alert('Excede el tama??o permitido (1 MB)');
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
        alert('Excede el tama??o permitido (1 MB)');
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
        alert('Excede el tama??o permitido (1 MB)');
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

}
