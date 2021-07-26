import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import { AuthorsService } from "src/app/services/authors.service";
import { IAuthor } from "src/dto";
import { fromAuthorActions } from "./authors.actions";

@Injectable()
export class AuthorsEffects {
  @Effect()
  getAuthors$ = this.actions$.pipe(
    ofType(fromAuthorActions.requestAuthors),
    mergeMap(() =>
      this.authorsService.getAll().pipe(
        map(
          (authors) =>
          fromAuthorActions.requestAuthorsSuccess({
              payload: {
                  authors
              },
            })
        ),
        catchError(() => of(fromAuthorActions.requestAuthorsFail()
    ))
      )
    )
  );

  @Effect()
  addAuthor$ = this.actions$.pipe(
    ofType(fromAuthorActions.requestAddAuthor),
    mergeMap(({ payload: { authorName} }) =>
      this.authorsService.addAuthor(authorName).pipe(
        map(
          (author: IAuthor) =>
          fromAuthorActions.requestAddAuthorSuccess({
              payload: {
                  author
              },
            })
        ),
        catchError(() => of(fromAuthorActions.requestAddAuthorFail()
    ))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authorsService: AuthorsService
  ) {}
}