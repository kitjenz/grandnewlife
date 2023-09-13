import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Popnosesurgery2023Component } from './popnosesurgery2023.component';

describe('Popnosesurgery2023Component', () => {
  let component: Popnosesurgery2023Component;
  let fixture: ComponentFixture<Popnosesurgery2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Popnosesurgery2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Popnosesurgery2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
