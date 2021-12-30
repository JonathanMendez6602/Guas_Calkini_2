import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-agregar-catalogo',
  templateUrl: './agregar-catalogo.component.html',
  styleUrls: ['./agregar-catalogo.component.scss']
})
export class AgregarCatalogoComponent implements OnInit {

  form: FormGroup;

  constructor(
    public catalogoService: CatalogoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      sucursal:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
      
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.catalogoService.createSucursal(this.form.value).subscribe(res => {
         console.log('Sucursal created successfully!');
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }

}
