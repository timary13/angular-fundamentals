import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  public navigateToShowCourse(id: any) {
    this.router.navigate(['/courses', id]);
  }

  public navigateToEditCourse(id: any) {
    this.router.navigate(['/courses/edit', id]);
  }

  public getIdFromUrl(): Observable<Params> {
    const x = this.activateRoute.snapshot.paramMap.get('id');
    return this.activateRoute.params
      .pipe(
        tap(params => params['id'])
    );
  }
}
