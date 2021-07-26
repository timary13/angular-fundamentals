import { createAction, props } from "@ngrx/store";

export enum UserActions {
    RequestCurrentUser = '[User] Request Current User',
    RequestCurrentUserSuccess = '[User] Request Current User Success',
    RequestCurrentUserFail = '[User] Request Current User Fail',
}

export const requestCurrentUser = createAction(UserActions.RequestCurrentUser);
export const requestCurrentUserSuccess = createAction(
    UserActions.RequestCurrentUserSuccess,
    props<{
        payload: {
            isAdmin: boolean;
            name: string;
        }
    }>()
);
export const requestCurrentUserFail = createAction(UserActions.RequestCurrentUserFail);
