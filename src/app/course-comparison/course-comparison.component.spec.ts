import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComparisonComponent } from './course-comparison.component';

describe('CourseComparisonComponent', () => {
  let component: CourseComparisonComponent;
  let fixture: ComponentFixture<CourseComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseComparisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
