import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftskinDelayagingComponent } from './liftskin-delayaging.component';

describe('LiftskinDelayagingComponent', () => {
  let component: LiftskinDelayagingComponent;
  let fixture: ComponentFixture<LiftskinDelayagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftskinDelayagingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftskinDelayagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
