import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceliftRhytidectomySurgeryComponent } from './facelift-rhytidectomy-surgery.component';

describe('FaceliftRhytidectomySurgeryComponent', () => {
  let component: FaceliftRhytidectomySurgeryComponent;
  let fixture: ComponentFixture<FaceliftRhytidectomySurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceliftRhytidectomySurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceliftRhytidectomySurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
