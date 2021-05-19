import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Course} from "../../../dto";
import {titleCase} from "../helpers";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {
  public courseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    //const inputCourse = new Course(this.course);
    this.courseForm = formBuilder.group({
      "title": ['', [Validators.required]],
      "description": ['', [ Validators.required]],
      "author": ['', [ Validators.required]],
      "duration": ['', [ Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public submit() {
    this.courseForm.markAllAsTouched();
    this.courseForm.updateValueAndValidity();
  }

  public isEmptyInput(controlName: string): () => boolean {
    return () => this.courseForm.controls[controlName].touched && !this.courseForm.controls[controlName].value;
  }

  public getErrorMessage(controlName: string): () => string {
    const name = titleCase(controlName);
    return () => `${name} is required.`;
  }
}
