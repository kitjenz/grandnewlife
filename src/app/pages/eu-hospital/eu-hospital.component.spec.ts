import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuHospitalComponent } from './eu-hospital.component';

describe('EuHospitalComponent', () => {
  let component: EuHospitalComponent;
  let fixture: ComponentFixture<EuHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EuHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
