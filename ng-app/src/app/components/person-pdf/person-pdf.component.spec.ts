import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonPdfComponent } from './person-pdf.component';

describe('PersonPdfComponent', () => {
  let component: PersonPdfComponent;
  let fixture: ComponentFixture<PersonPdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonPdfComponent]
    });
    fixture = TestBed.createComponent(PersonPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
