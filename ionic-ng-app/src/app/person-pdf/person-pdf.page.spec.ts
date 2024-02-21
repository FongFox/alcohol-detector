import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonPdfPage } from './person-pdf.page';

describe('PersonPdfPage', () => {
  let component: PersonPdfPage;
  let fixture: ComponentFixture<PersonPdfPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonPdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
