import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreaselfsergeryVsAgencysergeryComponent } from './koreaselfsergery-vs-agencysergery.component';

describe('KoreaselfsergeryVsAgencysergeryComponent', () => {
  let component: KoreaselfsergeryVsAgencysergeryComponent;
  let fixture: ComponentFixture<KoreaselfsergeryVsAgencysergeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoreaselfsergeryVsAgencysergeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoreaselfsergeryVsAgencysergeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
