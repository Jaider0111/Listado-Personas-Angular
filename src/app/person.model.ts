export class Person {
  /*
  name: string = ''
  lastname: string = ''

  constructor(name:string, lastname:string){
    this.name = name
    this.lastname = lastname
  }*/
  constructor(public name: string, public lastname: string) {}

  toString = () => this.name + ' ' + this.lastname;
}
