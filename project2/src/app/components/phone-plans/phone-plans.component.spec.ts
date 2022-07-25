import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePlansComponent } from './phone-plans.component';

describe('PhonePlansComponent', () => {
  let component: PhonePlansComponent;
  let fixture: ComponentFixture<PhonePlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonePlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
