import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceliftSurgeryComponent } from './facelift-surgery.component';

describe('FaceliftSurgeryComponent', () => {
  let component: FaceliftSurgeryComponent;
  let fixture: ComponentFixture<FaceliftSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceliftSurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceliftSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
