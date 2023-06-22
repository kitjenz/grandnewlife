import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanHospitalComponent } from './nan-hospital.component';

describe('NanHospitalComponent', () => {
  let component: NanHospitalComponent;
  let fixture: ComponentFixture<NanHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanHospitalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NanHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
