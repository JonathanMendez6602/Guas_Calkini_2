import { Component, OnInit } from '@angular/core';

import { ChoferService } from '../chofer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Chofer } from '../chofer';

@Component({
  selector: 'app-edit-chofer',
  templateUrl: './edit-chofer.component.html',
  styleUrls: ['./edit-chofer.component.css']
})
export class EditChoferComponent implements OnInit {

  id: number;
  chofer: Chofer;
  form: FormGroup;

  constructor(
    public choferService: ChoferService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    
    this.id = this.route.snapshot.params['idChofer'];
    this.choferService.find(this.id).subscribe((data: Chofer)=>{
      this.chofer = data;
      console.log(this.chofer.id);
    });

    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellido_p: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      apellido_m: new FormControl('', [ Validators.required, Validators.pattern ('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      edad: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_lic_fed:  new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      fecha_lic_fed: new FormControl(''),
      num_lic_fed: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_lic_est:  new FormControl('', [ Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      fecha_lic_est: new FormControl(''),
      num_lic_est: new FormControl('', [ Validators.required, Validators.pattern ("^[0-9]*$") ]),
      doc_ine: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      doc_curp: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
    });


  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.choferService.update(this.id, this.form.value).subscribe(res => {
         console.log('chofer updated successfully!');
         this.router.navigateByUrl('chofer/indexChofer');
    })
  }

}
