import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeBreastSurgeryComponent } from './safe-breast-surgery.component';

describe('SafeBreastSurgeryComponent', () => {
  let component: SafeBreastSurgeryComponent;
  let fixture: ComponentFixture<SafeBreastSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafeBreastSurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SafeBreastSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
