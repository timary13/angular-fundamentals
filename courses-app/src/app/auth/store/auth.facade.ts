import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { State } from "src/app/store";
import { SessionStorageService } from "../services/session-storage.service";
import { fromAuthActions } from "./auth.actions";
import { authSelectors } from "./auth.selectors";

@Injectable()
export class AuthStateFacade {
    public getToken$: Observable<string> = this.store.pipe(select(authSelectors.getToken));
    public getLoginErrorMessage$: Observable<string> = this.store.pipe(select(authSelectors.getSpecificErrorMessage));
    public getRegisterErrorMessage$: Observable<string> = this.store.pipe(select(authSelectors.getSpecificErrorMessage));
    public isAuthorized$: Observable<boolean> = this.store.pipe(select(authSelectors.isUserAuthorized));

    constructor(private store: Store<State>, private sessionStorage: SessionStorageService) {}

    public login(body: { email: string, password: string }): void {
        this.store.dispatch(fromAuthActions.requestLogin({ payload: body }));
    }

    public register(body: { email: string, password: string }): void {
        this.store.dispatch(fromAuthActions.requestRegister({ payload: body }));
    }

    public closeSession(): void {
        this.store.dispatch(fromAuthActions.requestLogoutSuccess());
    }

    public setAuthorization(): void {
        this.store.dispatch(fromAuthActions.requestLoginSuccess({
            payload: {
                token: this.sessionStorage.getToken()
            }
        }));
    }
}