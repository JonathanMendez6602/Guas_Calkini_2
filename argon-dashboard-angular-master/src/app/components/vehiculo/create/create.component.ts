import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../services/vehiculo.service';
import { SucursalService } from '../../../services/sucursal.service';
import { AseguradoraService } from '../../../services/aseguradora.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Aseguradora, Sucursal } from '../../../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  inv: FormGroup;
  sucursales: Sucursal[] = [];
  aseguradoras: Aseguradora[] = [];
  obtenerValor;
  replytype;
  varParticular: boolean;
  archivos: any = [];
  previsualizacion: string;
  previsualizacion2: string;
  enviar_fotovehiculo: string;
  enviar_fotoinventario: string;
  ImagenFile: File=null;  
  datosinv: string = "";

  selectedValue:any;
  constructor(
    public vehiculoService: VehiculoService,
    public sucursalService: SucursalService,
    public aseguradoraService: AseguradoraService,
    private router: Router,
    private http: HttpClient,
    private sanitizer: DomSanitizer,
    public modal:NgbModal
  ) { }

  ngOnInit(): void {
    this.varParticular = true;
    this.varParticular;

    console.log(this.obtenerValor);
    this.sucursalService.getAll().subscribe((data: Sucursal[])=>{
      this.sucursales = data;
      console.log(this.sucursales);
      })

      this.aseguradoraService.getAll().subscribe((data: Aseguradora[])=>{
        this.aseguradoras = data;
        console.log(this.aseguradoras);
        })

    this.form = new FormGroup({
      marca:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      modelo: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      foto_vehiculo: new FormControl(''),
      color:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      placas: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      inventario: new FormControl(''),
      foto_inventario:  new FormControl(''),
      llaves: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      tipo_servicio: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      lugar_siniestro: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      descripcion: new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9 \-\']+') ]),
      nombre: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      sucursal: new FormControl('')
    });
    
  }

  get f(){
    return this.form.controls;
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

  

  submit(){
    console.log(this.form.value);
    this.vehiculoService.create(this.form.value).subscribe(res => {
         console.log('Vehiculo created successfully!');
         this.router.navigateByUrl('vehiculo/index');
    })
  }

  inventario(){
    console.log(this.inv.value);
    this.datosinv = "Motor"+ '\n' + "Bateria: " + this.inv.get('m1').value +
      ", Ventilador: " + this.inv.get('m2').value +
      ", Radiador: " + this.inv.get('m3').value +
      ", Radiador de clima: " + this.inv.get('m4').value +
      ", Tapon de aceite: " + this.inv.get('m5').value +
      ", Cables bujia: " + this.inv.get('m6').value + 
      ", Bayoneta de aceite: " + this.inv.get('m7').value +
      ", Claxon: " + this.inv.get('m8').value +
      ", Alternador: " + this.inv.get('m9').value +
      ", Marcha: " + this.inv.get('m10').value +
      ", Carter: " + this.inv.get('m11').value +'\n'+'\n'+

      "Costados"+ '\n' + "Molduras: " + this.inv.get('c1').value +
      ", Espejos: " + this.inv.get('c2').value +
      ", Direccionales: " + this.inv.get('c3').value +
      ", Mango de puerta: " + this.inv.get('c4').value +
      ", Candado de puertas: " + this.inv.get('c5').value +
      ", Tapon combustible: " + this.inv.get('c6').value +
      ", Tapones: " + this.inv.get('c7').value +
      ", Rines: " + this.inv.get('c8').value +
      ", Llantas: " + this.inv.get('c9').value +'\n'+'\n'+

      "Cajuela"+ '\n' + "Alfombra: " + this.inv.get('ca1').value +
      ", Llanta refacción: " + this.inv.get('ca2').value +
      ", Extintor: " + this.inv.get('ca3').value +
      ", Herramientas: " + this.inv.get('ca4').value +
      ", Gato: " + this.inv.get('ca5').value +
      ", Señales: " + this.inv.get('ca6').value +
      ", Equipo de sonido: " + this.inv.get('ca7').value +
      ", Cerradura: " + this.inv.get('ca8').value +'\n'+'\n'+

      "Toldo"+ '\n' + "Quemacocos: " + this.inv.get('t1').value +
      ", Canasbia: " + this.inv.get('t2').value +
      ", Torreta: " + this.inv.get('t3').value+'\n'+'\n'+

      "Atras"+ '\n' + "Medallon: " + this.inv.get('a1').value +
      ", Limpiador: " + this.inv.get('a2').value +
      ", Rociador: " + this.inv.get('a3').value +
      ", Antena: " + this.inv.get('a4').value +
      ", Calaveras: " + this.inv.get('a5').value +
      ", Emblemas: " + this.inv.get('a6').value +
      ", Facia: " + this.inv.get('a7').value +
      ", Luz de placa: " + this.inv.get('a8').value +
      ", Placa: " + this.inv.get('a9').value +'\n'+'\n'+

      "Otros"+ '\n' + "Caseta: " + this.inv.get('o1').value +
      ", Plataforma: " + this.inv.get('o2').value +
      ", Roas: " + this.inv.get('o3').value +
      ", Caja: " + this.inv.get('o4').value +
      ", Caja volteo: " + this.inv.get('o5').value +
      ", Equipo hidraulico: " + this.inv.get('o6').value +
      ", Camper: " + this.inv.get('o7').value +'\n'+'\n'+

      "Frente"+ '\n' + "Carroceria: " + this.inv.get('f1').value +
      ", Parabrisas: " + this.inv.get('f2').value +
      ", le..res: " + this.inv.get('f3').value +
      ", Ro..: " + this.inv.get('f4').value +
      ", Parrilla: " + this.inv.get('f5').value +
      ", Cofre: " + this.inv.get('f6').value +
      ", Antena: " + this.inv.get('f7').value +
      ", Salpicadera: " + this.inv.get('f8').value +
      ", Escudo: " + this.inv.get('f9').value +
      ", Faros: " + this.inv.get('f10').value +
      ", Faros especiales: " + this.inv.get('f11').value +
      ", Cuartos: " + this.inv.get('f12').value +
      ", Bordes: " + this.inv.get('f13').value +
      ", Facia: " + this.inv.get('f14').value +
      ", Placa: " + this.inv.get('f15').value +'\n'+'\n'+

      "Interior"+ '\n' + "Volante: " + this.inv.get('i1').value +
      ", Espejo retrovisor: " + this.inv.get('i2').value +
      ", Visores: " + this.inv.get('i3').value +
      ", Luz de cortesia: " + this.inv.get('i4').value +
      ", A...: " + this.inv.get('i5').value +
      ", Vestiduras: " + this.inv.get('i6').value +
      ", Mangas interiores: " + this.inv.get('i7').value +
      ", Elev critales: " + this.inv.get('i8').value +
      ", Tablero: " + this.inv.get('i9').value +
      ", Ceniceros: " + this.inv.get('i10').value +
      ", Encendedor: " + this.inv.get('i11').value +
      ", Estereo: " + this.inv.get('i12').value +
      ", Bocinas: " + this.inv.get('i13').value +
      ", Ecualizador: " + this.inv.get('i14').value +
      ", Tapa guantera: " + this.inv.get('i15').value +
      ", Tapetes: " + this.inv.get('i16').value +
      ", Cinturones: " + this.inv.get('i17').value +
      ", Circulación: " + this.inv.get('i18').value +
      ", Llavero: " + this.inv.get('i19').value +
      ", Otros: " + this.inv.get('i20').value;
      

    console.log(this.datosinv);

  }

  openScroll(contenido){
    this.inv = new FormGroup({
    m1: new FormControl(''),
    m2: new FormControl(''),
    m3: new FormControl(''),
    m4: new FormControl(''),
    m5: new FormControl(''),
    m6: new FormControl(''),
    m7: new FormControl(''),
    m8: new FormControl(''),
    m9: new FormControl(''),
    m10: new FormControl(''),
    m11: new FormControl(''),
    c1: new FormControl(''),
    c2: new FormControl(''),
    c3: new FormControl(''),
    c4: new FormControl(''),
    c5: new FormControl(''),
    c6: new FormControl(''),
    c7: new FormControl(''),
    c8: new FormControl(''),
    c9: new FormControl(''),
    ca1: new FormControl(''),
    ca2: new FormControl(''),
    ca3: new FormControl(''),
    ca4: new FormControl(''),
    ca5: new FormControl(''),
    ca6: new FormControl(''),
    ca7: new FormControl(''),
    ca8: new FormControl(''),
    t1: new FormControl(''),
    t2: new FormControl(''),
    t3: new FormControl(''),
    a1: new FormControl(''),
    a2: new FormControl(''),
    a3: new FormControl(''),
    a4: new FormControl(''),
    a5: new FormControl(''),
    a6: new FormControl(''),
    a7: new FormControl(''),
    a8: new FormControl(''),
    a9: new FormControl(''),
    o1: new FormControl(''),
    o2: new FormControl(''),
    o3: new FormControl(''),
    o4: new FormControl(''),
    o5: new FormControl(''),
    o6: new FormControl(''),
    o7: new FormControl(''),
    f1: new FormControl(''),
    f2: new FormControl(''),
    f3: new FormControl(''),
    f4: new FormControl(''),
    f5: new FormControl(''),
    f6: new FormControl(''),
    f7: new FormControl(''),
    f8: new FormControl(''),
    f9: new FormControl(''),
    f10: new FormControl(''),
    f11: new FormControl(''),
    f12: new FormControl(''),
    f13: new FormControl(''),
    f14: new FormControl(''),
    f15: new FormControl(''),
    i1: new FormControl(''),
    i2: new FormControl(''),
    i3: new FormControl(''),
    i4: new FormControl(''),
    i5: new FormControl(''),
    i6: new FormControl(''),
    i7: new FormControl(''),
    i8: new FormControl(''),
    i9: new FormControl(''),
    i10: new FormControl(''),
    i11: new FormControl(''),
    i12: new FormControl(''),
    i13: new FormControl(''),
    i14: new FormControl(''),
    i15: new FormControl(''),
    i16: new FormControl(''),
    i17: new FormControl(''),
    i18: new FormControl(''),
    i19: new FormControl(''),
    i20: new FormControl(''),
    });
    this.modal.open(contenido,{scrollable:true});
  }
}
