import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../catalogo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sucursal } from '../sucursal';

@Component({
  selector: 'app-edit-sucursal',
  templateUrl: './edit-sucursal.component.html',
  styleUrls: ['./edit-sucursal.component.scss']
})
export class EditSucursalComponent implements OnInit {

  id: number;
  sucursal: Sucursal;
  form: FormGroup;

  constructor(
    public catalogoService: CatalogoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idSucursal'];
    this.catalogoService.findSucursal(this.id).subscribe((data: Sucursal)=>{
      this.sucursal = data;
    });

    this.form = new FormGroup({
      sucursal:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
      
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.catalogoService.updateSucursal(this.id, this.form.value).subscribe(res => {
         console.log('Sucursal updated successfully!');
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }

}
