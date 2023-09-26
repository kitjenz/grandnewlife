import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendKoreasurgery2023Component } from './trend-koreasurgery2023.component';

describe('TrendKoreasurgery2023Component', () => {
  let component: TrendKoreasurgery2023Component;
  let fixture: ComponentFixture<TrendKoreasurgery2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendKoreasurgery2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendKoreasurgery2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
