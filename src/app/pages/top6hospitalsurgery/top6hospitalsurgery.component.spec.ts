import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top6hospitalsurgeryComponent } from './top6hospitalsurgery.component';

describe('Top6hospitalsurgeryComponent', () => {
  let component: Top6hospitalsurgeryComponent;
  let fixture: ComponentFixture<Top6hospitalsurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top6hospitalsurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top6hospitalsurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
