import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course, ICourse} from "../../../dto";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  @Input() course!: ICourse;
  public courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    const inputCourse = new Course(this.course);
    this.courseForm = formBuilder.group({
      "title": [inputCourse.title, [Validators.required]],
      "description": [inputCourse.description, [ Validators.required]],
      "creationDate": [inputCourse.creationDate, [ Validators.required]],
      "duration": [inputCourse.duration, [ Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public submit() {

  }
}
