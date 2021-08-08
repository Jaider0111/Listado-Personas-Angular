import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService, private router: Router) {}
  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(
      (people) => {
        this.people = <Person[]>people;
        this.peopleService.setPeople(<Person[]>people)
      }
    )
  }

  add() {
    this.router.navigate(["personas/agregar"])
  }
}
