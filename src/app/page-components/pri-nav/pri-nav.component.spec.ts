import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriNavComponent } from './pri-nav.component';

describe('PriNavComponent', () => {
  let component: PriNavComponent;
  let fixture: ComponentFixture<PriNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
