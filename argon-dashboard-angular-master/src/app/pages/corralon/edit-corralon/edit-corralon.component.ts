import { Component, OnInit } from '@angular/core';

import { CorralonService } from '../corralon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Corralon } from '../corralon';

@Component({
  selector: 'app-edit-corralon',
  templateUrl: './edit-corralon.component.html',
  styleUrls: ['./edit-corralon.component.scss']
})
export class EditCorralonComponent implements OnInit {
  id: number;
  corralon:Corralon;
  form: FormGroup;

  constructor(
    public corralonService: CorralonService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idCorralon'];
    this.corralonService.find(this.id).subscribe((data: Corralon)=>{
      this.corralon = data;
    })

    this.form = new FormGroup({
      fecha_entrada: new FormControl(''),
      pension_c: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      dias_pension: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ]),
      status_entrega: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      fecha_entrega: new FormControl(''),
      otro_asunto: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      id_vehiculo: new FormControl('', [ Validators.required, Validators.pattern("^[0-9]*$") ])
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.corralonService.update(this.id, this.form.value).subscribe(res => {
      console.log('Corralon update successfully');
      this.router.navigateByUrl('corralon/indexCorralon');
    })
  }

}
