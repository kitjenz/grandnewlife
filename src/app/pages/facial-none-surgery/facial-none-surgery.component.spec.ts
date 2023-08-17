import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacialNoneSurgeryComponent } from './facial-none-surgery.component';

describe('FacialNoneSurgeryComponent', () => {
  let component: FacialNoneSurgeryComponent;
  let fixture: ComponentFixture<FacialNoneSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacialNoneSurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacialNoneSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
