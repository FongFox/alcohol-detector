import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonService } from '../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-detect',
  templateUrl: './person-detect.page.html',
  styleUrls: ['./person-detect.page.scss'],
})
export class PersonDetectPage {
  person: Person = new Person();
  isClicked: boolean = false;

  constructor(private personService: PersonService, private router: Router) {}

  onSubmit() {
    this.isClicked = true;

    this.personService.savePerson(this.person).subscribe((success) => {
      if(success === true) {
        this.isClicked = false;
        this.router.navigateByUrl('');
      }
    });
  }
}
