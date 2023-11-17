import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JawSurgeryComponent } from './jaw-surgery.component';

describe('JawSurgeryComponent', () => {
  let component: JawSurgeryComponent;
  let fixture: ComponentFixture<JawSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JawSurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JawSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
