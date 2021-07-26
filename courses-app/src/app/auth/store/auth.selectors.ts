import { createSelector } from "@ngrx/store";
import { State } from "src/app/store";
import { AuthState } from "./auth.reducer";

export const selectAuth = (state: State) => state.auth;

const getToken = createSelector(
    selectAuth,
    (state: AuthState) => state.token
);

const isUserAuthorized = createSelector(
    selectAuth,
    (state: AuthState) => state.isAuthorized
);

const getSpecificErrorMessage = createSelector(
    selectAuth,
    (state: AuthState) => state.errorMessage
);

export const authSelectors = {
    getToken,
    isUserAuthorized,
    getSpecificErrorMessage
}
