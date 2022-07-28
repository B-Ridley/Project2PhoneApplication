import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarticonnavComponent } from './carticonnav.component';

describe('CarticonnavComponent', () => {
  let component: CarticonnavComponent;
  let fixture: ComponentFixture<CarticonnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarticonnavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarticonnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
