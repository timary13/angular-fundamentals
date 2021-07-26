import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { UserRole } from "src/dto";
import { AuthService } from "../services/auth.service";

import { UserService } from "../services/user.service";
import { AuthActions } from "./auth.actions";
import { requestCurrentUserFail, requestCurrentUserSuccess, UserActions } from "./user.actions";
import { fromAuthActions } from './auth.actions';

const LOGIN_FAIL_MESSAGE = 'Login failed';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthActions.RequestLogin),
    mergeMap((user) =>
      this.authService.login(user).pipe(
        map(
          (token) =>
          fromAuthActions.requestLoginSuccess({
              payload: {
                  token
              },
            })
        ),
        catchError(() => of(fromAuthActions.requestLoginFail({ 
            payload: {
                errorMessage: LOGIN_FAIL_MESSAGE
            } 
        })
    ))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}
}