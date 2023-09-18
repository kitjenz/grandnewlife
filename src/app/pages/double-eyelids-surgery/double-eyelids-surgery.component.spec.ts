import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleEyelidsSurgeryComponent } from './double-eyelids-surgery.component';

describe('DoubleEyelidsSurgeryComponent', () => {
  let component: DoubleEyelidsSurgeryComponent;
  let fixture: ComponentFixture<DoubleEyelidsSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleEyelidsSurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleEyelidsSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
