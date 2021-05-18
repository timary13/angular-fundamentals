import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardInfoItemComponent } from './course-card-info-item.component';

describe('CourseCardInfoItemComponent', () => {
  let component: CourseCardInfoItemComponent;
  let fixture: ComponentFixture<CourseCardInfoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCardInfoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCardInfoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
