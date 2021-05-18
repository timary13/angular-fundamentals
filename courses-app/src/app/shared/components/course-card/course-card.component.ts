import {Component, Input, OnInit} from '@angular/core';
import {ICourse} from "../../../../dto";
import * as moment from "moment";
import {
  DATE_FORMAT,
  CREATED_LABEL_TEXT,
  DURATION_LABEL_TEXT,
  AUTHORS_LABEL_TEXT
} from "../../constants";

const TEXT_MAX_LENGTH: number = 500;

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
  @Input() course!: ICourse;

  public createdLabelText = CREATED_LABEL_TEXT;
  public durationLabelText = DURATION_LABEL_TEXT;
  public authorsLabelText = AUTHORS_LABEL_TEXT;

  public get ellipsisDescription() {
    const text = this.course.description;
    return (text.length > TEXT_MAX_LENGTH ? text.slice(0, TEXT_MAX_LENGTH) + '...' :  text);
  }

  public get formatDate() {
    const date = new Date(this.course.creationDate);
    return moment(date).format(DATE_FORMAT);
  }

  public get formatAuthors() {
    return this.course.authors.join(', ');
  }

  public get formatDuration() {
    const minutes = this.course.duration;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}:${mins} ${hours > 1 ? 'hours' : 'hour'}`;
  }
}
