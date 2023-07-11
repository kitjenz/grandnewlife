import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanobagiHospitalComponent } from './banobagi-hospital.component';

describe('BanobagiHospitalComponent', () => {
  let component: BanobagiHospitalComponent;
  let fixture: ComponentFixture<BanobagiHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanobagiHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BanobagiHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
