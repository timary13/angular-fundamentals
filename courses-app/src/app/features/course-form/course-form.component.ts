import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {Course, ICourse} from "../../../dto";
import {titleCase} from "../helpers";

const DEBOUNCE_DUE_TIME = 400;

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {
  @Input() public course: ICourse | null;
  @Output() addAuthor = new EventEmitter<string>();
  
  public courseForm: FormGroup;
  public currentCourse: Course;

  private formChangesSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) {
    this.currentCourse = new Course(this.course);
  }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      "title": [this.currentCourse.title, [Validators.required]],
      "description": [this.currentCourse.description, [ Validators.required]],
      "author": ['', [ Validators.required]],
      "duration": [this.currentCourse.duration, [ Validators.required]],
    });

    this.formChangesSubscription = this.courseForm.valueChanges
      .pipe(debounceTime(DEBOUNCE_DUE_TIME))
      .subscribe(changes => {
        const newCourse: ICourse = {
          title: changes.title,
          description: changes.description,
          creationDate: changes.creationDate,
          duration: changes.duration,
          authors: changes.authors,
        };
        //this.formUpdate.emit(newCourse);
      });
  }

  public submit() {
    this.courseForm.markAllAsTouched();
    this.courseForm.updateValueAndValidity();
  }

  public addAuthorHandler(name: string) {
    this.addAuthor.emit(name);
  }

  public isEmptyInput(controlName: string): () => boolean {
    return () => this.courseForm.controls[controlName].touched && !this.courseForm.controls[controlName].value;
  }

  public getErrorMessage(controlName: string): () => string {
    const name = titleCase(controlName);
    return () => `${name} is required.`;
  }
}
