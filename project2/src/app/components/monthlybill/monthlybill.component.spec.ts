import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlybillComponent } from './monthlybill.component';

describe('MonthlybillComponent', () => {
  let component: MonthlybillComponent;
  let fixture: ComponentFixture<MonthlybillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlybillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
