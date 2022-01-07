import { Component, OnInit } from '@angular/core';

import { SucursalService } from 'src/app/services/sucursal.service';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-sucursal',
  templateUrl: './create-sucursal.component.html',
  styleUrls: ['./create-sucursal.component.scss']
})
export class CreateSucursalComponent implements OnInit {

  form: FormGroup;

  constructor(
    public sucursalService: SucursalService,
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
    this.sucursalService.create(this.form.value).subscribe(res => {
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }

}
