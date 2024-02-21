import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonDetectPage } from './person-detect.page';

describe('PersonDetectPage', () => {
  let component: PersonDetectPage;
  let fixture: ComponentFixture<PersonDetectPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonDetectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
