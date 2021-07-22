import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthorsStoreService } from 'src/app/services/authors-store.service';

import { CoursesStoreService } from 'src/app/services/courses-store.service';
import { NavigatorService } from 'src/app/services/navigator.service';
import {Course, ICourse} from "../../../dto";

enum ViewMode {
  ADD = 'add',
  EDIT = 'edit'
}

const ID = 'id';
const MODE = 'mode';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
  public course: ICourse;
  public viewMode: ViewMode;
  public ViewMode = ViewMode;

  private courseIdSubscription: Subscription = new Subscription();

  constructor(
    private courseStoreService: CoursesStoreService,
    private authorsStoreService: AuthorsStoreService,
    private navigatorService: NavigatorService,
    private activateRoute: ActivatedRoute,
  ) {
    const courseId = this.activateRoute.snapshot.paramMap.get(ID);
    this.viewMode = this.activateRoute.snapshot.paramMap.get(MODE) as ViewMode;
    if (this.viewMode === ViewMode.EDIT) {
      this.courseIdSubscription = this.courseStoreService.getCourse(String(courseId))
        .subscribe((data) => {
          this.course = data;
        });
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.courseIdSubscription) {
      this.courseIdSubscription.unsubscribe();
    }
  }

  public addAuthor(name: string) {
    this.authorsStoreService.addAuthor(name);
  }

  public submit() {

  }
}
