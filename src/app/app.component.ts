import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Listado de personas';

  constructor(private loginService:LoginService){}

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyADwM_pgCaD1wLrX9ukG5K5IX8kdzShKWQ",
        authDomain: "angularpeoplelist.firebaseapp.com"
    })
  }

  salir(){
    this.loginService.logout()
  }

  isAuth(){
    return this.loginService.isAuth()
  }
}
