import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';
import { LoggingService } from './loggingService.service';
import { Person } from './person.model';

@Injectable()
export class PeopleService {
  people: Person[] = [];
  greet = new EventEmitter<number>();

  constructor(
    private loggingService: LoggingService,
    private dataService: DataService
  ) {}

  getPeople() {
    return this.dataService.loadPeople();
  }

  setPeople(people: Person[]) {
    this.people = people
  }

  addPerson(person: Person) {
    this.loggingService.sendMessageToConsole('Enviamos persona:' + person);
    if(this.people==null)
      this.people = []
    this.people.push(person);
    this.dataService.storePeople(this.people);
  }

  getPerson(index: number) {
    return this.people[index];
  }

  editPerson(index: number, person: Person) {
    this.people[index] = person
    this.dataService.modifyPerson(index, person)
  }

  deletePerson(index: number) {
    this.people.splice(index, 1)
    this.dataService.deletePerson(index)
    this.modifyPeople()
  }

  modifyPeople() {
    if(this.people!=null)
    this.dataService.storePeople(this.people)
  }
}
