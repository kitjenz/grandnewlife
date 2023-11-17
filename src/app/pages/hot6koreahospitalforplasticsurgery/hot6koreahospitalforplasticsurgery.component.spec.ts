import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hot6koreahospitalforplasticsurgeryComponent } from './hot6koreahospitalforplasticsurgery.component';

describe('Hot6koreahospitalforplasticsurgeryComponent', () => {
  let component: Hot6koreahospitalforplasticsurgeryComponent;
  let fixture: ComponentFixture<Hot6koreahospitalforplasticsurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hot6koreahospitalforplasticsurgeryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hot6koreahospitalforplasticsurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
