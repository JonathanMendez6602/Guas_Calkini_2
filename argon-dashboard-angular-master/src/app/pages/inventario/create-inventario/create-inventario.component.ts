import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../inventario.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-inventario',
  templateUrl: './create-inventario.component.html',
  styleUrls: ['./create-inventario.component.scss']
})
export class CreateInventarioComponent implements OnInit {

  form: FormGroup;

  constructor(
    public inventarioService: InventarioService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(){
    
  }

}
