import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyelidSurgeryComponent } from './eyelid-surgery.component';

describe('EyelidSurgeryComponent', () => {
  let component: EyelidSurgeryComponent;
  let fixture: ComponentFixture<EyelidSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EyelidSurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyelidSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
