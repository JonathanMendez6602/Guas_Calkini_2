import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar-aseguradora-catalogo',
  templateUrl: './agregar-aseguradora-catalogo.component.html',
  styleUrls: ['./agregar-aseguradora-catalogo.component.scss']
})
export class AgregarAseguradoraCatalogoComponent implements OnInit {

  form: FormGroup;

  constructor(
    public catalogoService: CatalogoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      aseguradora:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.catalogoService.create(this.form.value).subscribe(res => {
         console.log('Catalogo created successfully!');
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }


}
