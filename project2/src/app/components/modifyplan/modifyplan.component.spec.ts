import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyplanComponent } from './modifyplan.component';

describe('ModifyplanComponent', () => {
  let component: ModifyplanComponent;
  let fixture: ComponentFixture<ModifyplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyplanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
