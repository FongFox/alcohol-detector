import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-pdf',
  templateUrl: './person-pdf.component.html',
  styleUrls: ['./person-pdf.component.css'],
})
export class PersonPdfComponent implements OnInit {
  id!: number;
  person: Person = new Person();
  normalValue: number = 0.7;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.handleReturnPerson();
    this.personService.exportToPdf('pdfContent', 'Biên Bản Xác Nhận Nồng Độ Cồn');
  }

  handleReturnPerson() {
    this.id = this.route.snapshot.params['id'];
    this.personService.getPerson(this.id).subscribe((data) => {
      // console.log(data);
      if (Array.isArray(data)) {
        for (let i: number = 0; i < data.length; i++) {
          if (data[i].id == this.id) {
            this.person = data[i];
            break;
          }
        }
      }
      console.log(this.person);
    });
  }


}
