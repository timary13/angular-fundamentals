import { Component, OnDestroy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';
import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { ICourse } from 'src/dto';
import { mockedCourseList } from '../../../assets/mock';
import { EMPTY_LIST_INFO_TITLE, EMPTY_LIST_INFO_TEXT } from '../constants';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnDestroy {
  public userName = 'Jack';
  public courses: ICourse[] = [];
  public emptyListInfoTitle = EMPTY_LIST_INFO_TITLE;
  public emptyListInfoText = EMPTY_LIST_INFO_TEXT;

  public isOpenModal = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private courseStore: CoursesStoreService,
    private authorsStore: AuthorsStoreService,
  ) {
    const courseStoreSubscribe = this.courseStore.courses$
      .subscribe((data) => {
        /*this.courses = courses.map(course => {
          const authorIds = course.authors.map(author => author.id);

        });*/
        this.courses = data;
      });
    this.subscriptions.add(courseStoreSubscribe);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  public openModal() {
    this.isOpenModal = true;
  }

  public closeModal() {
    this.isOpenModal = false;
  }

  public confirmModal(result: any) {
    this.isOpenModal = false;
  }

  public onSearch(value: string) {
  }
}
