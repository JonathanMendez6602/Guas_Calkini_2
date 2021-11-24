import { Component, OnInit } from '@angular/core';

import { VehiculoService } from '../vehiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Vehiculo } from '../vehiculo';
import { Sucursal } from '../sucursal';
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
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer
    
  ) { }

  ngOnInit(): void {
    this.varParticular = true;
    
    this.vehiculoService.getAllSucursal().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
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
      marca:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      modelo: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      foto_vehiculo: new FormControl(''),
      color:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      placas: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      inventario: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      foto_inventario:  new FormControl(''),
      llaves: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      tipo_servicio: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      lugar_siniestro: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      descripcion: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      nombre: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      sucursal: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });


    

  }

  cambioParticular(){
    this.varParticular=true;
  }

  cambioAseguradora(){
    this.varParticular=false;
  }

  capturarFileFotoVehiculo(event): any{
    console.log("AQUI VA EL EVENTO");
    console.log(event);
    const archivoCapturado = event.target.files[0];
    console.log("AQUI VA EL ARCH CAPTURADO");
    console.log(archivoCapturado);
    const fileSize = event.target.files[0].size;
    const fileType = event.target.files[0].type;
    console.log("AQUI VA EL FILE TYPE");
    console.log(fileType);
    if(fileType == "image/jpeg" || fileType == "image/png" || fileType == "image/jpg"){
      if(fileSize<1000000){
        console.log(archivoCapturado);
        this.extraerBase64(archivoCapturado).then((imagen: any) =>{
          this.previsualizacion = imagen.base;
          this.enviar_fotovehiculo = this.previsualizacion;
          console.log(imagen);
        })
        console.log(event.target.files);
      }else{
        this.enviar_fotovehiculo = "";
        alert('Excede el tamaño permitido (1 MB)');
      } 
    }else{
      this.enviar_fotovehiculo = "";
      alert('Tipo de archivo no permitido  (jpg, png, jpeg)');
    }
  }

  capturarFileFotoInventario(event): any{
    console.log(event);
    const archivoCapturado2 = event.target.files[0];
    const fileSize2 = event.target.files[0].size;
    const fileType2 = event.target.files[0].type;
    if(fileType2 == "image/jpeg" || fileType2 == "image/png" || fileType2 == "image/jpg"){
      if(fileSize2<1000000){
        console.log(this.enviar_fotovehiculo);
        this.extraerBase64(archivoCapturado2).then((imagen: any) =>{
          this.previsualizacion2 = imagen.base;
          this.enviar_fotoinventario = this.previsualizacion2;
          console.log(this.previsualizacion);
        })
        console.log(event.target.files);
      }else{
        this.enviar_fotoinventario = "";
        alert('Excede el tamaño permitido (1 MB)');
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
    console.log(this.form.value);
    this.vehiculoService.update(this.id, this.form.value).subscribe(res => {
         console.log('vehiculo updated successfully!');
         this.router.navigateByUrl('vehiculo/index');
    })
  }

}
