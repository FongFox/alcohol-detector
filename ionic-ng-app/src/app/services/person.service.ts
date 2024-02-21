import { Injectable } from '@angular/core';
import { Person } from '../models/person';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiPath: string = 'api/v1';
  private employeePath: string = 'persons';
  private baseURL = `http://localhost:8080/${this.apiPath}/${this.employeePath}`;

  // Biến có thể dùng để lưu trữ tạm
  personList!: Person[]; //handle person list
  person!: Person; //handle person detail
  tempPerson!: Person;

  constructor(private http: HttpClient) {}

  // Tương tác với API vói Back-end (REST)
  getPersonList(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseURL);
  }
  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseURL}?id=${id}`);
  }
  savePerson(person: Person): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL, person);
  }

  // Xuất ra PDF
  exportToPdf(elementId: string, filename: string) {
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Tìm phần tử có id
    const element = document.getElementById(elementId);

    if (!element) {
      console.error(`Element with id "${elementId}" not found.`);
      return;
    }

    // Chuyển đổi phần tử thành hình ảnh
    html2canvas(element).then((canvas) => {
      const contentDataURL = canvas.toDataURL('image/png');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Thêm hình ảnh vào PDF
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(filename + '.pdf');
    });
  }

}
