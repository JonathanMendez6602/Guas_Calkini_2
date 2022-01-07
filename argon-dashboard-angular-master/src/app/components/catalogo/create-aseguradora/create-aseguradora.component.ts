import { Component, OnInit } from '@angular/core';
import { AseguradoraService } from 'src/app/services/aseguradora.service';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-aseguradora',
  templateUrl: './create-aseguradora.component.html',
  styleUrls: ['./create-aseguradora.component.scss']
})
export class CreateAseguradoraComponent implements OnInit {

  form: FormGroup;

  constructor(
    public aseguradoraService: AseguradoraService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre_aseguradora:  new FormControl('')
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    this.aseguradoraService.create(this.form.value).subscribe(res => {
         this.router.navigateByUrl('catalogo/indexCatalogo');
    })
  }


}
