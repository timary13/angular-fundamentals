import { ActionReducerMap } from "@ngrx/store";

import { AuthEffects } from "../auth/store/auth.effects";
import * as Auth from "../auth/store/auth.reducer";
import { UserEffects } from "../user/store/user.effects";
import * as User from "../user/store/user.reducers";
import { AuthorsEffects } from "./authors/authors.effects";
import * as Authors from "./authors/authors.reducer";

export interface State {
    user: User.UserState;
    auth: Auth.AuthState;
    authors: Authors.AuthorsState;
}

export const reducers: ActionReducerMap<State> = {
    [User.userFeatureKey]: User.userReducer,
    [Auth.authFeatureKey]: Auth.authReducer,
    [Authors.authorsFeatureKey]: Authors.authorsReducer,
};

export const effects = [UserEffects, AuthEffects, AuthorsEffects];