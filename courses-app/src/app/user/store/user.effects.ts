import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { UserRole } from "src/dto";

import { UserService } from "../services/user.service";
import { requestCurrentUserFail, requestCurrentUserSuccess, UserActions } from "./user.actions";

@Injectable()
export class UserEffects {
  @Effect()
  getCurrentUser$ = this.actions$.pipe(
    ofType(UserActions.RequestCurrentUser),
    mergeMap(() =>
      this.userService.getUser().pipe(
        map(
          (user) =>
            requestCurrentUserSuccess({
              payload: {
                  isAdmin: user.role === UserRole.Admin,
                  name: user.name
              },
            })
        ),
        catchError(() => of(requestCurrentUserFail()))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}