import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { PersonService } from '../services/person.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-pdf',
  templateUrl: './person-pdf.page.html',
  styleUrls: ['./person-pdf.page.scss'],
})
export class PersonPdfPage implements OnInit {
  id!: number;
  person: Person = new Person();
  normalValue: number = 0.7;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Bắt id thông qua việc snapshot param
    this.id = this.route.snapshot.params['id'];
    // console.log(this.id);

    // lấy data (vì là array nên sẽ loop và gán dữ liệu vào nếu trùng id)
    this.personService.getPerson(this.id).subscribe((data) => {
      if (Array.isArray(data)) {
        for (let i: number = 0; i < data.length; i++) {
          if (data[i].id == this.id) {
            this.person = data[i];
            break;
          }
        }
        console.log(this.person);
      }
    });
  }

  exportPdf() {
    this.personService.exportToPdf(
      'pdfContent',
      'Biên Bản Xác Nhận Nồng Độ Cồn'
    );
  }
}
