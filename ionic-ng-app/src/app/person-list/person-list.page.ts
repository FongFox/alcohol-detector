import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.page.html',
  styleUrls: ['./person-list.page.scss'],
})
export class PersonListPage implements OnInit {
  personList!: Person[];

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.handleGetData();
  }

  handleGetData() {
    this.personService.getPersonList().subscribe(data => {
      this.personList = data;
    });
  }
  
}
