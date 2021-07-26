import { createSelector } from "@ngrx/store";
import { State } from "src/app/store";
import { UserState } from "./user.reducers";

export const selectUser = (state: State) => state.user;

export const getName = createSelector(
    selectUser,
    (state: UserState) => state.name
);

export const isAdmin = createSelector(
    selectUser,
    (state: UserState) => state.isAdmin
);
