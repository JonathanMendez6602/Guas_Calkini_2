import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.email);
    console.log(this.password);
  }
}
