import { Action, createReducer, on } from "@ngrx/store";
import { fromAuthActions } from "./auth.actions";

const REGISTRATION_FAIL_MESSAGE = 'Registration failed';

export const authFeatureKey = 'auth';

export interface AuthState {
    isAuthorized: boolean;
    token: string;
    errorMessage: string;
}

export const initialAuthState: AuthState = {
    isAuthorized: false,
    token: '',
    errorMessage: ''
}

const reducer = createReducer<AuthState>(
    initialAuthState,
    on(fromAuthActions.requestLogin,  (state: AuthState, { payload }) => ({...state})),
    on(fromAuthActions.requestLoginSuccess,  (state: AuthState, { payload }) => ({
        isAuthorized: true,
        token: payload.token,
        errorMessage: ''
    })),
    on(fromAuthActions.requestLoginFail,  (state: AuthState, { payload }) => ({
        isAuthorized: false,
        token: '',
        errorMessage: payload.errorMessage
    })),
    on(fromAuthActions.requestRegister,  (state: AuthState, { payload }) => ({...state})),
    on(fromAuthActions.requestRegisterSuccess,  (state: AuthState) => ({...state})),
    on(fromAuthActions.requestRegisterFail,  (state: AuthState) => ({
        isAuthorized: false,
        token: '',
        errorMessage: REGISTRATION_FAIL_MESSAGE
    })),
    on(fromAuthActions.requestLogout,  (state: AuthState) => ({...state})),
    on(fromAuthActions.requestLogoutSuccess,  (state: AuthState) => initialAuthState),
);

export const authReducer = (state: AuthState, action: Action): AuthState => reducer(state, action);