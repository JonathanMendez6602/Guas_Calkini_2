import { Component, OnInit } from '@angular/core';

import { CatalogoService } from 'src/app/services/catalogo.service';
import { Catalogo } from 'src/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-catalogo',
  templateUrl: './edit-catalogo.component.html',
  styleUrls: ['./edit-catalogo.component.scss']
})
export class EditCatalogoComponent implements OnInit {

  id: number;
  catalogo: Catalogo;
  form: FormGroup;

  constructor(
    public catalogoService: CatalogoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['idCatalogo'];
    this.catalogoService.find(this.id).subscribe((data: Catalogo)=>{
      this.catalogo = data;
    });

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
    this.catalogoService.update(this.id, this.form.value).subscribe(res => {
         console.log('Catalogo updated successfully!');
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }


}
