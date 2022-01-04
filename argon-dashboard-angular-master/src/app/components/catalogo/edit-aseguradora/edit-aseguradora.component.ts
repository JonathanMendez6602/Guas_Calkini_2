import { Component, OnInit } from '@angular/core';
import { AseguradoraService } from 'src/app/services/aseguradora.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Aseguradora } from 'src/shared/interfaces';

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
    public aseguradoraService: AseguradoraService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.aseguradora = {
      id: 1,
      nombre_aseguradora: '-'
    }
    this.id = this.route.snapshot.params['idAseguradora'];
    this.aseguradoraService.find(this.id).subscribe((data: Aseguradora)=>{
      this.aseguradora = data;
    });

    this.form = new FormGroup({
      nombre_aseguradora:  new FormControl('')
      
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.aseguradoraService.update(this.id, this.form.value).subscribe(res => {
         console.log('Aseguradora updated successfully!');
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }

}
