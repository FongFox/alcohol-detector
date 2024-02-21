import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.page.html',
  styleUrls: ['./person-detail.page.scss'],
})
export class PersonDetailPage implements OnInit{
  id!: number;
  person: Person = new Person();

  constructor(private personService: PersonService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Bắt id thông qua việc snapshot param
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);

    // lấy data (vì là array nên sẽ loop và gán dữ liệu vào nếu trùng id)
    this.personService.getPerson(this.id).subscribe(data => {
      if(Array.isArray(data)) {
        for(let i : number = 0; i < data.length; i++) {
          if(data[i].id == this.id) {
            this.person = data[i]; break;
          }
        }
        console.log(this.person);
      }
    });

  }

}
