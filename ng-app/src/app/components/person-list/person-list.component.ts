import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit{
  personList!: Person[];

  constructor(private personService: PersonService){ }

  ngOnInit(): void {
    this.handleReturnData();
  }

  handleReturnData() {
    this.personService.getPersonList().subscribe((data) => {
      this.personList = data;
    })
  }
}
