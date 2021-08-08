import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { Person } from './person.model';

@Injectable()
export class DataService {
  token: string;

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ){}

  storePeople(people: Person[]) {
    this.token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://angularpeoplelist-default-rtdb.firebaseio.com/datos.json?auth=' +
          this.token,
        people
      )
      .subscribe(
        (response) => console.log('Resultado del guardado: ' + response),
        (error) => console.log('Error en el guardado: ' + error)
      );
  }

  loadPeople() {
    this.token = this.loginService.getIdToken();
    return this.httpClient.get(
      'https://angularpeoplelist-default-rtdb.firebaseio.com/datos.json?auth=' +
        this.token
    );
  }

  modifyPerson(index: number, person: Person) {
    this.token = this.loginService.getIdToken();
    this.httpClient
      .put(
        'https://angularpeoplelist-default-rtdb.firebaseio.com/datos/' +
          index +
          '.json?auth=' +
          this.token,
        person
      )
      .subscribe(
        (response) => console.log('Resultado de la modificacion: ' + response),
        (error) => console.log('Error en la modificacion: ' + error)
      );
  }

  deletePerson(index: number) {
    this.token = this.loginService.getIdToken();
    this.httpClient
      .delete(
        'https://angularpeoplelist-default-rtdb.firebaseio.com/datos/' +
          index +
          '.json?auth=' +
          this.token
      )
      .subscribe(
        (response) => console.log('Resultado del borrado: ' + response),
        (error) => console.log('Error en el borrado: ' + error)
      );
  }
}
