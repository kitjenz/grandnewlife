import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreacelebHotfaceComponent } from './koreaceleb-hotface.component';

describe('KoreacelebHotfaceComponent', () => {
  let component: KoreacelebHotfaceComponent;
  let fixture: ComponentFixture<KoreacelebHotfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoreacelebHotfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoreacelebHotfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
