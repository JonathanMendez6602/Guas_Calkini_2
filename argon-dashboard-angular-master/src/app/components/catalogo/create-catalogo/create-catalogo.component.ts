import { Component, OnInit } from '@angular/core';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-catalogo',
  templateUrl: './create-catalogo.component.html',
  styleUrls: ['./create-catalogo.component.scss']
})
export class CreateCatalogoComponent implements OnInit {

  form: FormGroup;

  constructor(
    public catalogoService: CatalogoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      tipoVehiculo:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      costo:  new FormControl('', [ Validators.required, Validators.pattern("^[0-9-$]*$") ])
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