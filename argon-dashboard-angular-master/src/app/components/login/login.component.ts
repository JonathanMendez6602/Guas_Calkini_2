import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public userService: UserService) { }

  login(){
    console.log(this.email);
    console.log(this.password);
  }
  ngOnInit(): void {
  }

}
