import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreaplasticsurgerypriceComponent } from './koreaplasticsurgeryprice.component';

describe('KoreaplasticsurgerypriceComponent', () => {
  let component: KoreaplasticsurgerypriceComponent;
  let fixture: ComponentFixture<KoreaplasticsurgerypriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoreaplasticsurgerypriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoreaplasticsurgerypriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
