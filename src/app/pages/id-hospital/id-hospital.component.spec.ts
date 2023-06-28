import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdHospitalComponent } from './id-hospital.component';

describe('IdHospitalComponent', () => {
  let component: IdHospitalComponent;
  let fixture: ComponentFixture<IdHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
