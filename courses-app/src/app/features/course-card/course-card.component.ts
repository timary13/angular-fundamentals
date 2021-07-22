import {Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, map, skipWhile, tap } from 'rxjs/operators';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import {Course, IAuthor, ICourse} from "../../../dto";
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
export class CourseCardComponent implements OnDestroy {
  @Input() course: ICourse = new Course(null);

  public createdLabelText = CREATED_LABEL_TEXT;
  public durationLabelText = DURATION_LABEL_TEXT;
  public authorsLabelText = AUTHORS_LABEL_TEXT;

  public authors: string[] = [];

  private subscriptions: Subscription = new Subscription();

  constructor(
    private courseStore: CoursesStoreService,
    private authorsStore: AuthorsStoreService
  ) {
    const courseIsLoadingSubription = this.courseStore.isLoading$
      .pipe(
        distinctUntilChanged(),
        skipWhile(value => value)
      )
      .subscribe(() => {
        this.getAuthorsName(this.course.authors);
      });
    this.subscriptions.add(courseIsLoadingSubription);
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

  public get ellipsisDescription() {
    const text = this.course.description;
    return (text.length > TEXT_MAX_LENGTH ? text.slice(0, TEXT_MAX_LENGTH) + '...' :  text);
  }

  public getAuthorsName(courseAuthors: IAuthor[]) {
    this.authors = [];
    const authorSubscription = this.authorsStore.authors$
      .subscribe((authors) => {
        courseAuthors.map(authorId => {
          const cardAuthor = authors.find(item => item.id === authorId.id);
          if (cardAuthor) {
            this.authors.push(cardAuthor.name);
          }
        });
      });
    this.subscriptions.add(authorSubscription);
  }
}
