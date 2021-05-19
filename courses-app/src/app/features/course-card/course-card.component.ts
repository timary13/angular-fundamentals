import {Component, Input } from '@angular/core';
import {Course, ICourse} from "../../../dto";
import {
  CREATED_LABEL_TEXT,
  DURATION_LABEL_TEXT,
  AUTHORS_LABEL_TEXT
} from "../constants";

const TEXT_MAX_LENGTH: number = 500;

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course: ICourse;

  public createdLabelText = CREATED_LABEL_TEXT;
  public durationLabelText = DURATION_LABEL_TEXT;
  public authorsLabelText = AUTHORS_LABEL_TEXT;

  constructor() {
    this.course = new Course(null);
  }

  public get ellipsisDescription() {
    const text = this.course.description;
    return (text.length > TEXT_MAX_LENGTH ? text.slice(0, TEXT_MAX_LENGTH) + '...' :  text);
  }

  public get formatAuthors() {
    return this.course.authors.join(', ');
  }
}
