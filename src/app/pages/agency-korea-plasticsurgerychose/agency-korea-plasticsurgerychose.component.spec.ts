import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyKoreaPlasticsurgerychoseComponent } from './agency-korea-plasticsurgerychose.component';

describe('AgencyKoreaPlasticsurgerychoseComponent', () => {
  let component: AgencyKoreaPlasticsurgerychoseComponent;
  let fixture: ComponentFixture<AgencyKoreaPlasticsurgerychoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyKoreaPlasticsurgerychoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyKoreaPlasticsurgerychoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
