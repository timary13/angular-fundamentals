import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidatorComponent } from './input-validator.component';

describe('InputValidatorComponent', () => {
  let component: InputValidatorComponent;
  let fixture: ComponentFixture<InputValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputValidatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
