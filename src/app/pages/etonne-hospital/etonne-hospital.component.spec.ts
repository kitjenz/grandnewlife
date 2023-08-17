import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtonneHospitalComponent } from './etonne-hospital.component';

describe('EtonneHospitalComponent', () => {
  let component: EtonneHospitalComponent;
  let fixture: ComponentFixture<EtonneHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtonneHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtonneHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
