import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/services/sucursal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sucursal } from 'src/shared/interfaces';

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
    public sucursalService: SucursalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sucursal = {
      id: 1,
      sucursal: '-'
    }
    this.id = this.route.snapshot.params['idSucursal'];
    this.sucursalService.find(this.id).subscribe((data: Sucursal)=>{
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
    this.sucursalService.update(this.id, this.form.value).subscribe(res => {
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }

}
