import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseForm2Component } from './new-course-form-2.component';

describe('NewCourseForm2Component', () => {
  let component: NewCourseForm2Component;
  let fixture: ComponentFixture<NewCourseForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCourseForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
