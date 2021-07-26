import { createAction, props } from "@ngrx/store";

export enum AuthActions {
    RequestLogin = '[Auth] Request Login',
    RequestLoginSuccess = '[Auth] Request Login Success',
    RequestLoginFail = '[Auth] Request Login Fail',
    RequestRegister = '[Auth] Request Register',
    RequestRegisterSuccess = '[Auth] Request Register Success',
    RequestRegisterFail = '[Auth] Request Register Fail',
    RequestLogout = '[Auth] Request Logout',
    RequestLogoutSuccess = '[Auth] Request Logout Success'
}

const requestLogin = createAction(
    AuthActions.RequestLogin,
    props<{
        payload: {
            email: string;
            password: string;
        }
    }>()
);

const requestLoginSuccess = createAction(
    AuthActions.RequestLoginSuccess,
    props<{
        payload: {
            token: string;
        }
    }>()
);
const requestLoginFail = createAction(
    AuthActions.RequestLoginFail,
    props<{
        payload: {
            errorMessage: string;
        }
    }>()
);
const requestRegister = createAction(
    AuthActions.RequestRegister,
    props<{
        payload: {
            email: string;
            password: string;
        }
    }>()
);
const requestRegisterSuccess = createAction(AuthActions.RequestRegisterSuccess);
const requestRegisterFail = createAction(AuthActions.RequestRegisterFail);
const requestLogout = createAction(AuthActions.RequestLogout);
const requestLogoutSuccess = createAction(AuthActions.RequestLogoutSuccess);

export const fromAuthActions = {
    requestLogin,
    requestLoginSuccess,
    requestLoginFail,
    requestRegister,
    requestRegisterSuccess,
    requestRegisterFail,
    requestLogout,
    requestLogoutSuccess
}