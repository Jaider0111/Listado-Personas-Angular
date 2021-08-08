import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggingService } from '../../loggingService.service';
import { PeopleService } from '../../people.service';
import { Person } from '../../person.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  //@ViewChild('lastnRef') lastname: ElementRef
  lastname: string
  name: string
  index: number
  editMode: number

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    peopleService.greet.subscribe((i: number) =>
      alert('El indice es: ' + (i + 1))
    );
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id']
    this.editMode = +this.route.snapshot.queryParams['edit']
    if (this.editMode==1) {
      let person = this.peopleService.getPerson(this.index)
      this.name = person.name
      this.lastname = person.lastname
    }
  }

  addPerson() {
    let person = new Person(this.name, this.lastname)
    if (this.editMode==1)
      this.peopleService.editPerson(this.index, person)
    else
      this.peopleService.addPerson(person)
    this.router.navigate(['personas'])
  }

  deletePerson(){
    if(this.editMode==1)
      this.peopleService.deletePerson(this.index)
    this.router.navigate(['personas'])
  }
}
