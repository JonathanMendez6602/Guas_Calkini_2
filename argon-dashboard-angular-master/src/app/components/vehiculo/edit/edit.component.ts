import { Component, OnInit } from '@angular/core';

import { VehiculoService } from '../../../services/vehiculo.service';
import { SucursalService } from '../../../services/sucursal.service';
import { AseguradoraService } from '../../../services/aseguradora.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vehiculo } from '../../../../shared/interfaces';
import { Sucursal } from '../../../../shared/interfaces';
import { Aseguradora } from '../../../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id: number;
  vehiculo: Vehiculo;
  form: FormGroup;
  obtenerValor: String;
  sucursales: Sucursal[] = [];
  aseguradoras: Aseguradora[] = [];
  cambioLlave:boolean;
  varParticular: boolean;

  archivos: any = [];
  previsualizacion: string;
  previsualizacion2: string;
  enviar_fotovehiculo: string;
  enviar_fotoinventario: string;
  ImagenFile: File=null;
  constructor(
    public vehiculoService: VehiculoService,
    public sucursalService: SucursalService,
    public aseguradoraService: AseguradoraService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    
  ) { }

  ngOnInit(): void {
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
    this.varParticular = true;
    
    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      })
      this.aseguradoraService.getAll().subscribe((data: Aseguradora[])=>{
        this.aseguradoras = data;
        })
    
    this.id = this.route.snapshot.params['idVehiculo'];
    this.vehiculoService.find(this.id).subscribe((data: Vehiculo)=>{
      this.vehiculo = data;
      this.enviar_fotovehiculo = this.vehiculo.foto_vehiculo;
      this.enviar_fotoinventario = this.vehiculo.foto_inventario;
      if(this.vehiculo.llaves=="si"){
        this.cambioLlave=true;
      }else{
        this.cambioLlave=false;
      }
    });
    

    this.form = new FormGroup({
      marca:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ]),
      modelo: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-Z????????????????????????????????????????????????0-9 \-\']+') ]),
      foto_vehiculo: new FormControl(''),
      color:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ]),
      placas: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-Z????????????????????????????????????????????????0-9 \-\']+') ]),
      inventario: new FormControl('', [ Validators.pattern('^[a-zA-Z????????????????????????????????????????????????0-9 \-\']+') ]),
      foto_inventario:  new FormControl(''),
      llaves: new FormControl('', [ Validators.pattern('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ]),
      tipo_servicio: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z????????????????????????????????????????????????0-9 \-\']+') ]),
      lugar_siniestro: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z????????????????????????????????????????????????0-9 \-\']+') ]),
      descripcion: new FormControl('', [ Validators.pattern('^[a-zA-Z????????????????????????????????????????????????0-9 \-\']+') ]),
      nombre: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ]),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-Z???????????????????????????????????????????????? \-\']+') ])
    });


    

  }

  cambioParticular(){
    this.varParticular=true;
  }

  cambioAseguradora(){
    this.varParticular=false;
  }

  capturarFileFotoVehiculo(event): any{
    const archivoCapturado = event.target.files[0];
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    if(fileType == "image/jpeg" || fileType == "image/png" || fileType == "image/jpg"){
      if(fileSize<1000000){
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.previsualizacion = imagen.base;
          this.enviar_fotovehiculo = this.previsualizacion;
        })
      }else{
        this.enviar_fotovehiculo = "";
        alert('Excede el tama??o permitido (1 MB)');
      } 
    }else{
      this.enviar_fotovehiculo = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileFotoInventario(event): any{
    const archivoCapturado2 = event.target.files[0];
    const fileSize2 = event.target.files[0].size;
    const fileType2 = event.target.files[0].type;
    if(fileType2 == "image/jpeg" || fileType2 == "image/png" || fileType2 == "image/jpg"){
      if(fileSize2<1000000){
        this.extraerBase64(archivoCapturado2).then((imagen: any) =>{
          this.previsualizacion2 = imagen.base;
          this.enviar_fotoinventario = this.previsualizacion2;
        })
      }else{
        this.enviar_fotoinventario = "";
        alert('Excede el tama??o permitido (1 MB)');
      }
    }else{
      this.enviar_fotovehiculo = "";
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

  get f(){
    return this.form.controls;
  }

  submit(){
    this.vehiculoService.update(this.id, this.form.value).subscribe(res => {
         this.router.navigateByUrl('vehiculo/index');
    })
  }

}
