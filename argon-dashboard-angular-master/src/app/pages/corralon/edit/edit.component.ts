import { Component, OnInit } from '@angular/core';

import { CorralonService } from '../corralon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Corralon } from '../corralon';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

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


    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.corralonService.update(this.id, this.form.value).subscribe(res => {
      console.log('Corralon update successfully');
      this.router.navigateByUrl('corralon/index');
    })
  }

}
