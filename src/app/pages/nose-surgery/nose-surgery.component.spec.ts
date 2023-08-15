import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoseSurgeryComponent } from './nose-surgery.component';

describe('NoseSurgeryComponent', () => {
  let component: NoseSurgeryComponent;
  let fixture: ComponentFixture<NoseSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoseSurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoseSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
