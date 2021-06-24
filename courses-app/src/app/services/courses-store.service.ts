import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
import { Course, ICourse } from 'src/dto';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService implements OnDestroy {
  private subscriptions: Subscription = new Subscription();

  private courses$$: BehaviorSubject<ICourse[]> = new BehaviorSubject<ICourse[]>([]);
  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public readonly courses$: Observable<ICourse[]> = this.courses$$.asObservable();
  public readonly isLoading$: Observable<boolean> = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService) {
    this.getAll();
   }

   ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
   }

  public getAll(): void {
    this.isLoading$$.next(true);
    const subscription = this.coursesService.getAll().subscribe(
      (data) => {
        const courses = data.map((course: ICourse) => new Course(course));
        this.courses$$.next(courses);
        this.isLoading$$.next(false);
      }
    );
    this.subscriptions.add(subscription);
  }

  public createCourse(course: ICourse): void {
    this.isLoading$$.next(true);
    const subscription = this.coursesService.createCourse(course)
      .subscribe(() => {
        this.courses$$.getValue().push(course);
        let nextValue = this.courses$$.getValue();
        this.courses$$.next(nextValue);
        this.isLoading$$.next(false);
      });
    this.subscriptions.add(subscription);
  }

  public editCourse(course: ICourse, id: string) {
    this.isLoading$$.next(true);
    const subscription = this.coursesService.editCourse(course, id)
      .subscribe(() => {
        const currentValue = this.courses$$.getValue();
        const index = currentValue.findIndex(course => course.id === id);
        const nextValue = currentValue.splice(index, 1, course);

        this.courses$$.next(nextValue);
        this.isLoading$$.next(false);
      });
      this.subscriptions.add(subscription);
  }

  public getCourse(id: string): Observable<ICourse> {
    this.isLoading$$.next(true);
    const obs = this.coursesService.getCourse(id);
    const subscription = obs
      .subscribe(() => {
        this.isLoading$$.next(false);
      });
    this.subscriptions.add(subscription);
    return obs;
  }

  public deleteCourse(id: string) {
    this.isLoading$$.next(true);
    const subscription = this.coursesService.deleteCourse(id)
      .subscribe(() => {
        const currentValue = this.courses$$.getValue();
        const index = currentValue.findIndex(course => course.id === id);
        const nextValue = currentValue.splice(index, 1);

        this.courses$$.next(nextValue);
        this.isLoading$$.next(false);
      });
    this.subscriptions.add(subscription);
  }
}
