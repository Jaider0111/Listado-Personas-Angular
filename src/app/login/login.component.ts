import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginServices: LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    const email = form.value.email
    const password = form.value.password
    this.loginServices.login(email, password)
  }
}
