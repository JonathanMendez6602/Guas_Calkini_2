import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Aseguradora } from '../aseguradora';
@Component({
  selector: 'app-edit-aseguradora',
  templateUrl: './edit-aseguradora.component.html',
  styleUrls: ['./edit-aseguradora.component.scss']
})
export class EditAseguradoraComponent implements OnInit {

  id: number;
  aseguradora: Aseguradora;
  form: FormGroup;
  constructor(
    public catalogoService: CatalogoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idAseguradora'];
    this.catalogoService.findAseguradora(this.id).subscribe((data: Aseguradora)=>{
      this.aseguradora = data;
    });

    this.form = new FormGroup({
      Aseguradora:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
      
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.catalogoService.updateAseguradora(this.id, this.form.value).subscribe(res => {
         console.log('Aseguradora updated successfully!');
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }

}
