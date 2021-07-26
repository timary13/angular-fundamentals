import { Action, createReducer, on } from "@ngrx/store";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

export const userFeatureKey = 'user';

export interface UserState {
    isAdmin: boolean;
    name: string;
}

export const initialUserState: UserState = {
    isAdmin: false,
    name: '',
}

const reducer = createReducer<UserState>(
    initialUserState,
    on(requestCurrentUser,  (state: UserState) => ({...state})),
    on(requestCurrentUserSuccess,  (state: UserState, { payload }) => ({
        isAdmin: payload.isAdmin,
        name: payload.name,
    })),
    on(requestCurrentUserFail,  (state: UserState) => ({...state})),
);

export const userReducer = (state: UserState, action: Action): UserState => reducer(state, action);