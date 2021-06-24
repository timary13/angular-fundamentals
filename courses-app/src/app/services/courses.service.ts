import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICourse } from 'src/dto';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ICourse[]> {
    return this.http.get<{ result: ICourse[] }>('http://localhost:3000/courses/all')
      .pipe(map(data => data.result));
  }

  public createCourse(course: ICourse) {
    return this.http.post('http://localhost:3000/courses/add', course);
  }

  public editCourse(course: ICourse, id: string) {
    return this.http.post(`http://localhost:3000/courses/${id}`, course);
  }

  public getCourse(id: string): Observable<ICourse> {
    return this.http.get<{ result: ICourse }>(`http://localhost:3000/courses/${id}`)
    .pipe(map(data => data.result));
  }

  public deleteCourse(id: string) {
    return this.http.delete(`http://localhost:3000/courses/${id}`);
  }
}
